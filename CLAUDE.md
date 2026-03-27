# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PsychPharma is a single-file, client-side psychiatric pharmacology reference app for German-speaking healthcare professionals. The entire application lives in `psychiatrie_app.html` — no build step, no dependencies, no package manager.

To run: open `psychiatrie_app.html` directly in any modern browser.

## Architecture

Everything is in one file (~755 lines), structured as:

1. **CSS** (lines ~12–360) — dark theme using CSS custom properties, CSS Grid layout (2-column desktop / stacked mobile, breakpoint at 700px), independent scrolling for sidebar and detail panel.

2. **Medication data** (lines ~400–635) — two JavaScript objects:
   - `CLASSES`: maps 6 class keys (`SSRI`, `SNRI`, `TZA`, `MAO`, `NRI`, `Andere`) to display name + hex color.
   - `MEDS`: array of ~25 medication objects, each with `name`, `klasse`, `handelsname`, `mechanismus`, `dosierung`, `indikationen[]`, `nebenwirkungen[]`, `kontraindikationen[]`, `cave`.

3. **Logic** (lines ~640–752) — vanilla JS functions:
   - `getFilteredMeds()` — combines active class filter + search string
   - `renderSidebar()` — groups filtered meds by class and renders the list
   - `showMed(name)` / `renderDetail()` — renders the detail panel for the selected medication
   - State is two variables: `activeFilter` (default `'all'`) and `activeMed` (selected med object)

## Adding or Editing Medications

Add entries to the `MEDS` array following the existing object shape. The `klasse` value must match a key in `CLASSES`. The UI automatically groups and color-codes based on that value — no other wiring needed.

## Adding a New Medication Class

1. Add an entry to `CLASSES` with a key, `name`, and `farbe` (hex color).
2. Add medications with that key as their `klasse`.
3. Add a filter button in the `.filter-bar` HTML section calling `setFilter('KEY', this)`.
