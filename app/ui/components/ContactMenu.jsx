"use client";

import React, { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
  IoCheckmark,
  IoChevronDown,
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail,
  IoOpenOutline,
} from "react-icons/io5";
import { cn } from "../../utils/cn";
import { EMAIL, GITHUB, GMAIL_COMPOSE_URL, LINKEDIN } from "../../data/contact";

// Copy text, falling back to a hidden textarea where the Clipboard API
// isn't available.
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
};

// Rows share one layout: icon, name, handle. Email adds Copy and Open
// (Gmail compose) on the right; LinkedIn and GitHub are whole-row links.
const CONTACTS = [
  {
    key: "email",
    name: "Email",
    handle: EMAIL,
    Icon: IoMail,
    copyText: EMAIL,
    copyLabel: "Copy email address",
    openUrl: GMAIL_COMPOSE_URL,
    openLabel: "Write an email in Gmail",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    handle: LINKEDIN.handle,
    Icon: IoLogoLinkedin,
    openUrl: LINKEDIN.url,
    openLabel: "Open LinkedIn profile",
  },
  {
    key: "github",
    name: "GitHub",
    handle: GITHUB.handle,
    Icon: IoLogoGithub,
    openUrl: GITHUB.url,
    openLabel: "Open GitHub profile",
  },
];

const rowClass =
  "flex w-full items-center gap-x-3 rounded px-3 py-2 text-left transition duration-200 hover:bg-white-3/[0.05]";

const actionClass =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded text-base text-white-3/[0.7] transition duration-200 hover:bg-white-3/[0.1] hover:text-green focus-visible:bg-white-3/[0.1] focus-visible:text-green focus-visible:outline-none";

const ContactMenu = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(null); // key of the row just copied
  const [openUp, setOpenUp] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  const items = () =>
    Array.from(menuRef.current?.querySelectorAll('[role="menuitem"]') ?? []);

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  // Close on a click outside the menu or on Escape
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) close();
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") close(true);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Open upwards when there isn't room below the button (e.g. on phones)
  useLayoutEffect(() => {
    if (!open || !buttonRef.current || !menuRef.current) return;
    const button = buttonRef.current.getBoundingClientRect();
    const needed = menuRef.current.offsetHeight + 16;
    const below = window.innerHeight - button.bottom;
    // Below if it fits there; otherwise whichever side has more room
    setOpenUp(below < needed && button.top > below);

    // Nudge sideways if it would spill past either edge of the screen
    const EDGE = 8;
    const menu = menuRef.current.getBoundingClientRect();
    const left = menu.left - shiftX;
    const right = menu.right - shiftX;
    const maxRight = document.documentElement.clientWidth - EDGE;
    setShiftX(right > maxRight ? Math.max(EDGE - left, maxRight - right) : left < EDGE ? EDGE - left : 0);
  }, [open]);

  // Move focus into the menu when it opens from the keyboard
  useEffect(() => {
    if (open && document.activeElement === buttonRef.current) {
      items()[0]?.focus({ preventScroll: true });
    }
  }, [open]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(null), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  // Arrow keys move between items, wrapping at the ends
  const onMenuKeyDown = (event) => {
    const list = items();
    const index = list.indexOf(document.activeElement);
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (step) {
      event.preventDefault();
      list[(index + step + list.length) % list.length]?.focus({ preventScroll: true });
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      list[event.key === "Home" ? 0 : list.length - 1]?.focus({ preventScroll: true });
    } else if (event.key === "Tab") {
      close();
    }
  };

  const onCopy = async (contact) => {
    if (await copyText(contact.copyText)) setCopied(contact.key);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
        className={cn(
          "flex items-center gap-x-2 px-6 sm:px-8 py-2 text-base md:text-lg rounded border-2 transition duration-300 border-white-3 hover:border-green text-center font-semibold hover:text-green",
          open && "border-green text-green"
        )}
      >
        Contact
        <IoChevronDown
          aria-hidden="true"
          className={cn("transition duration-300", open && "rotate-180")}
        />
      </button>

      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        aria-label="Contact options"
        onKeyDown={onMenuKeyDown}
        style={{ marginLeft: shiftX }}
        className={cn(
          "absolute z-50 left-0 sm:left-1/2 sm:-translate-x-1/2 w-[min(22rem,calc(100vw-2rem))]",
          openUp ? "bottom-full mb-3 origin-bottom" : "top-full mt-3 origin-top",
          "rounded-lg border border-white-3/[0.2] bg-black-3 p-2 text-left text-sm text-white-2 shadow-2xl shadow-black-3/60",
          "transition duration-200",
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        {CONTACTS.map((contact) => {
          const { key, name, handle, Icon } = contact;
          const isCopied = copied === key;
          const details = (
            <>
              <Icon aria-hidden="true" className="shrink-0 text-lg text-green" />
              <span className="min-w-0 flex-1">
                <span className="block text-white-1">{name}</span>
                <span className="block truncate text-xs text-white-3/[0.6]" title={handle}>
                  {handle}
                </span>
              </span>
            </>
          );

          // LinkedIn and GitHub: the whole row opens the profile
          if (!contact.copyText) {
            return (
              <a
                key={key}
                role="menuitem"
                href={contact.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.openLabel}
                onClick={() => close()}
                className={cn(rowClass, "group hover:text-green focus-visible:bg-white-3/[0.08] focus-visible:outline-none")}
              >
                {details}
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center text-base text-white-3/[0.5] transition duration-200 group-hover:text-green">
                  <IoOpenOutline />
                </span>
              </a>
            );
          }

          // Email: copy the address, or write in Gmail
          return (
            <div key={key} className={rowClass}>
              {details}
              <button
                type="button"
                role="menuitem"
                aria-label={isCopied ? "Copied" : contact.copyLabel}
                title={isCopied ? "Copied!" : contact.copyLabel}
                onClick={() => onCopy(contact)}
                className={cn(actionClass, isCopied && "text-green")}
              >
                {isCopied ? (
                  <IoCheckmark aria-hidden="true" />
                ) : (
                  <IoCopyOutline aria-hidden="true" />
                )}
              </button>
              <a
                role="menuitem"
                href={contact.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={contact.openLabel}
                title={contact.openLabel}
                onClick={() => close()}
                className={actionClass}
              >
                <IoOpenOutline aria-hidden="true" />
              </a>
            </div>
          );
        })}

        {/* Announce the copy result to screen readers */}
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </div>
    </div>
  );
};

export default ContactMenu;
