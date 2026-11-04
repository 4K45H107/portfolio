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

const itemClass =
  "flex w-full items-center gap-x-3 rounded px-3 py-2 text-left transition duration-200 hover:bg-white-3/[0.08] hover:text-green focus-visible:bg-white-3/[0.08] focus-visible:text-green focus-visible:outline-none";

const ContactMenu = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openUp, setOpenUp] = useState(false);
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
  }, [open]);

  // Move focus into the menu when it opens from the keyboard
  useEffect(() => {
    if (open && document.activeElement === buttonRef.current) {
      items()[0]?.focus({ preventScroll: true });
    }
  }, [open]);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  // Arrow keys move between items, wrapping at the ends
  const onMenuKeyDown = (event) => {
    const list = items();
    const index = list.indexOf(document.activeElement);
    const step = { ArrowDown: 1, ArrowUp: -1 }[event.key];
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

  const onCopy = async () => {
    if (await copyText(EMAIL)) setCopied(true);
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
        className={cn(
          "absolute z-50 left-0 sm:left-1/2 sm:-translate-x-1/2 w-[min(20rem,calc(100vw-2rem))]",
          openUp ? "bottom-full mb-3 origin-bottom" : "top-full mt-3 origin-top",
          "rounded-lg border border-white-3/[0.2] bg-black-3 p-2 text-left text-sm text-white-2 shadow-2xl shadow-black-3/60",
          "transition duration-200",
          open
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-1 pointer-events-none"
        )}
      >
        {/* Email: copy the address, or compose in Gmail */}
        <div className="px-3 pt-2 pb-1">
          <p className="flex items-center gap-x-2 text-white-3/[0.7] text-xs uppercase tracking-wider">
            <IoMail aria-hidden="true" className="text-green" />
            Email
          </p>
          <p className="mt-1 text-white-1 break-all select-all">{EMAIL}</p>
        </div>
        <button
          type="button"
          role="menuitem"
          onClick={onCopy}
          className={itemClass}
        >
          {copied ? (
            <IoCheckmark aria-hidden="true" className="text-green" />
          ) : (
            <IoCopyOutline aria-hidden="true" />
          )}
          <span className={cn(copied && "text-green")}>
            {copied ? "Copied!" : "Copy email address"}
          </span>
        </button>
        <a
          role="menuitem"
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => close()}
          className={itemClass}
        >
          <IoOpenOutline aria-hidden="true" />
          Write in Gmail
        </a>

        <div className="my-2 h-px bg-white-3/[0.15]" role="separator" />

        <a
          role="menuitem"
          href={LINKEDIN.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => close()}
          className={itemClass}
        >
          <IoLogoLinkedin aria-hidden="true" className="text-lg" />
          <span className="flex-1">
            LinkedIn
            <span className="block text-xs text-white-3/[0.6]">
              {LINKEDIN.handle}
            </span>
          </span>
          <IoOpenOutline aria-hidden="true" className="text-white-3/[0.5]" />
        </a>
        <a
          role="menuitem"
          href={GITHUB.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => close()}
          className={itemClass}
        >
          <IoLogoGithub aria-hidden="true" className="text-lg" />
          <span className="flex-1">
            GitHub
            <span className="block text-xs text-white-3/[0.6]">
              {GITHUB.handle}
            </span>
          </span>
          <IoOpenOutline aria-hidden="true" className="text-white-3/[0.5]" />
        </a>

        {/* Announce the copy result to screen readers */}
        <span className="sr-only" aria-live="polite">
          {copied ? "Email address copied" : ""}
        </span>
      </div>
    </div>
  );
};

export default ContactMenu;
