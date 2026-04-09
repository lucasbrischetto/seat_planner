'use strict';

// ══════════════════════════════════════════════════════════
//  TRANSLATIONS
// ══════════════════════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    appTitle: 'Seating Planner',
    appSubtitle: 'Drag guests to seats \u2022 Drag tables to reposition',
    appSubtitlePhrases: [
      'Drag guests to seats',
      'Drag tables to reposition',
      'Have fun',
      'Invite your aunt',
    ],
    btnAddTable: '+ Table',
    btnCsvImport: 'Import CSV',
    btnAutoAssign: 'Auto-assign',
    btnUndo: '\u21a9 Undo',
    btnSavePlan: 'Save Plan',
    btnLoadPlan: 'Upload Plan',
    btnExportCsv: 'Export CSV',
    btnPrint: '\uD83D\uDDA8 Print',
    btnClearTables: 'Clear tables',
    btnClearGuests: 'Clear list',
    confirmClearTablesMsg: 'Remove all tables? Guests will return to the list.',
    confirmClearGuestsMsg: 'Remove all guests from the list?',
    toastTablesCleared: 'Tables cleared',
    toastGuestsCleared: 'Guest list cleared',
    addGuestsLabel: 'Add Guests (one per line)',
    addGuestsPlaceholder: 'Alice Johnson\nBob Smith\nCarol Williams',
    btnAddGuests: 'Add Guests',
    guestListLabel: 'Guest List',
    searchPlaceholder: 'Search guests\u2026',
    canvasHintP: 'Click <strong>+ Table</strong> to add your first table',
    canvasHintSmall: 'Then drag guests from the list onto seats',
    modalAddTitle: 'Add Table',
    modalEditTitle: 'Edit Table',
    modalLabelLabel: 'Table Label',
    modalShapeLabel: 'Shape',
    shapeRound: 'Round',
    shapeRect: 'Rectangular',
    modalSeatsLabel: 'Number of Seats (2\u201348)',
    modalEndsLabel: 'Seats at short ends',
    modalCancel: 'Cancel',
    modalSave: 'Save',
    tableEditBtn: 'Edit',
    tableDeleteBtn: 'Delete',
    confirmCancel: 'Cancel',
    confirmDelete: 'Delete',
    confirmClearAll: 'Clear All',
    confirmClearTables: 'Clear tables',
    confirmClearGuests: 'Clear list',
    toastUndo: 'Undone',
    toastPlanSaved: 'Plan saved',
    toastPlanLoaded: 'Plan loaded',
    toastCleared: 'Cleared',
    toastAutoAssignAll: 'All guests already seated',
    toastNoSeats: 'No empty seats available',
    toastExported: 'Seating exported',
    toastAssigned: (n) => `Assigned ${n} guest${n !== 1 ? 's' : ''}`,
    toastImported: (n) => `Imported ${n} guest${n !== 1 ? 's' : ''}`,
    toastAdded: (n) => `Added ${n} guest${n !== 1 ? 's' : ''}`,
    guestCount: (n) => `${n} guest${n !== 1 ? 's' : ''}`,
    footerSeated: (s, u) => `${s} seated \u00b7 ${u} unassigned`,
    footerTables: (n) => `${n} table${n !== 1 ? 's' : ''}`,
    confirmDeleteTable: (label, n) => n > 0
      ? `Delete "${label}"? ${n} guest(s) will be returned to the list.`
      : `Delete "${label}"?`,
    confirmClearMsg: 'Clear everything? This will remove all guests and tables.',
    seatTitle: (n) => `Seat ${n} \u2014 drop a guest here`,
    unseatTitle: 'Remove from seat',
    deleteSeatTitle: 'Delete this seat',
    rotateTitle: 'Rotate table',
    renameTitle: 'Rename',
    removeGuestTitle: 'Remove guest',
    groupAssignTitle: 'Assign group',
    noGroup: 'No group',
    newGroupPlaceholder: 'New group name\u2026',
    addSeatTitle: 'Add seat',
    duplicateTableTitle: 'Duplicate table',
  },
  sv: {
    appTitle: 'Bordsplacering',
    appSubtitle: 'Dra g\u00e4ster till platser \u2022 Dra bord f\u00f6r att flytta',
    appSubtitlePhrases: [
      'Dra g\u00e4ster till platser',
      'Dra bord f\u00f6r att flytta',
      'Ha kul',
      'Bjud din moster',
    ],
    btnAddTable: '+ Bord',
    btnCsvImport: 'Importera CSV',
    btnAutoAssign: 'Auto-placera',
    btnUndo: '\u21a9 \u00c5ngra',
    btnSavePlan: 'Spara plan',
    btnLoadPlan: 'Ladda upp plan',
    btnExportCsv: 'Exportera CSV',
    btnPrint: '\uD83D\uDDA8 Skriv ut',
    btnClearTables: 'Rensa bord',
    btnClearGuests: 'Rensa lista',
    confirmClearTablesMsg: 'Ta bort alla bord? G\u00e4sterna \u00e5terg\u00e5r till listan.',
    confirmClearGuestsMsg: 'Ta bort alla g\u00e4ster fr\u00e5n listan?',
    toastTablesCleared: 'Bord rensade',
    toastGuestsCleared: 'G\u00e4stlista rensad',
    addGuestsLabel: 'L\u00e4gg till g\u00e4ster (en per rad)',
    addGuestsPlaceholder: 'Anna Svensson\nErik Lindqvist\nMaria Johansson',
    btnAddGuests: 'L\u00e4gg till g\u00e4ster',
    guestListLabel: 'G\u00e4stlista',
    searchPlaceholder: 'S\u00f6k g\u00e4ster\u2026',
    canvasHintP: 'Klicka p\u00e5 <strong>+ Bord</strong> f\u00f6r att l\u00e4gga till ditt f\u00f6rsta bord',
    canvasHintSmall: 'Dra sedan g\u00e4ster fr\u00e5n listan till platser',
    modalAddTitle: 'L\u00e4gg till bord',
    modalEditTitle: 'Redigera bord',
    modalLabelLabel: 'Bordsnamn',
    modalShapeLabel: 'Form',
    shapeRound: 'Rund',
    shapeRect: 'Rektangul\u00e4r',
    modalSeatsLabel: 'Antal platser (2\u201348)',
    modalEndsLabel: 'Platser vid kortändarna',
    modalCancel: 'Avbryt',
    modalSave: 'Spara',
    tableEditBtn: 'Redigera',
    tableDeleteBtn: 'Radera',
    confirmCancel: 'Avbryt',
    confirmDelete: 'Radera',
    confirmClearAll: 'Rensa allt',
    confirmClearTables: 'Rensa bord',
    confirmClearGuests: 'Rensa lista',
    toastUndo: '\u00c5tert\u00e4llt',
    toastPlanSaved: 'Plan sparad',
    toastPlanLoaded: 'Plan laddad',
    toastCleared: 'Rensat',
    toastAutoAssignAll: 'Alla g\u00e4ster redan placerade',
    toastNoSeats: 'Inga lediga platser',
    toastExported: 'Placering exporterad',
    toastAssigned: (n) => `Placerade ${n} g\u00e4st${n !== 1 ? 'er' : ''}`,
    toastImported: (n) => `Importerade ${n} g\u00e4st${n !== 1 ? 'er' : ''}`,
    toastAdded: (n) => `Lade till ${n} g\u00e4st${n !== 1 ? 'er' : ''}`,
    guestCount: (n) => `${n} g\u00e4st${n !== 1 ? 'er' : ''}`,
    footerSeated: (s, u) => `${s} placerade \u00b7 ${u} ej placerade`,
    footerTables: (n) => `${n} bord`,
    confirmDeleteTable: (label, n) => n > 0
      ? `Radera "${label}"? ${n} g\u00e4st(er) \u00e5terg\u00e5r till listan.`
      : `Radera "${label}"?`,
    confirmClearMsg: 'Rensa allt? Alla g\u00e4ster och bord tas bort.',
    seatTitle: (n) => `Plats ${n} \u2014 sl\u00e4pp en g\u00e4st h\u00e4r`,
    unseatTitle: 'Ta bort fr\u00e5n plats',
    deleteSeatTitle: 'Ta bort platsen',
    rotateTitle: 'Rotera bordet',
    renameTitle: 'Byt namn',
    removeGuestTitle: 'Ta bort g\u00e4st',
    groupAssignTitle: 'Tilldela grupp',
    noGroup: 'Ingen grupp',
    newGroupPlaceholder: 'Namn p\u00e5 ny grupp\u2026',
    addSeatTitle: 'L\u00e4gg till plats',
    duplicateTableTitle: 'Duplicera bordet',
  }
};

let currentLang = 'en';

// ── Subtitle cycling ──
let _subtitleIndex = 0;
let _subtitleTimer = null;

function startSubtitleCycle() {
  clearInterval(_subtitleTimer);
  _subtitleIndex = 0;
  const el = document.getElementById('app-subtitle');
  if (!el) return;
  el.style.opacity = '1';
  el.textContent = t('appSubtitlePhrases')[0];
  _subtitleTimer = setInterval(() => {
    const phrases = t('appSubtitlePhrases');
    el.style.opacity = '0';
    setTimeout(() => {
      _subtitleIndex = (_subtitleIndex + 1) % phrases.length;
      el.textContent = phrases[_subtitleIndex];
      el.style.opacity = '1';
    }, 420);
  }, 4000);
}

function t(key, ...args) {
  const tr = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  const val = tr[key];
  if (typeof val === 'function') return val(...args);
  return val != null ? val : (TRANSLATIONS['en'][key] || key);
}

// ══════════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════════

const TABLE_COLORS = [
  '#C8D8E8', // Pale Blue
  '#D97040', // Burnt Orange
  '#B8C8A8', // Light Sage
  '#A85048', // Brick Red
  '#F0D898', // Soft Yellow
  '#98A888', // Sage/Olive Green
  '#E8B860', // Golden/Mustard
  '#C86050', // Terracotta
  '#F5E8C8', // Light Yellow/Cream
  '#E8E8E8', // Light Gray
];

const GROUP_COLORS = [
  '#D97040', // Burnt Orange
  '#C86050', // Terracotta
  '#A85048', // Brick Red
  '#E8B860', // Golden/Mustard
  '#98A888', // Sage/Olive Green
  '#B8C8A8', // Light Sage
  '#C8D8E8', // Pale Blue
  '#F0D898', // Soft Yellow
  '#F5E8C8', // Light Yellow/Cream
  '#E8E8E8', // Light Gray
];

// Returns true if the hex color is light enough to need dark text
function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

// Shared font options used in the print panel and text box toolbars
const FONT_OPTIONS = [
  ['', 'Default'],
  ['Arial, sans-serif', 'Arial'],
  ["'Helvetica Neue', Helvetica, sans-serif", 'Helvetica'],
  ['Verdana, sans-serif', 'Verdana'],
  ['Tahoma, sans-serif', 'Tahoma'],
  ['Georgia, serif', 'Georgia'],
  ["'Times New Roman', serif", 'Times New Roman'],
  ['Garamond, serif', 'Garamond'],
  ['Palatino, serif', 'Palatino'],
  ["'Trebuchet MS', sans-serif", 'Trebuchet MS'],
  ["'Courier New', monospace", 'Courier New'],
];

// Paper sizes in mm (short side × long side; orientation swaps them)
const PAPER_SIZES_MM = {
  a4:     { short: 210, long: 297, label: 'A4' },
  a3:     { short: 297, long: 420, label: 'A3' },
  letter: { short: 216, long: 279, label: 'Letter' },
  legal:  { short: 216, long: 356, label: 'Legal' },
};
const MM_TO_PX = 96 / 25.4; // CSS px per mm at 96 dpi

const DEFAULT_STATE = () => ({
  guests: [],
  tables: [],
  groups: [],
  nextGuestId: 1,
  nextTableId: 1,
  nextGroupId: 1,
  textBoxes: [],
  tableSizeScale: 1,
  printSettings: {
    showNames: true,
    showTableLabels: true,
    showGroupColors: true,
    namesFontFamily: '',
    namesFontSize: 10,
    namesBold: false,
    namesItalic: false,
    tableLabelFontFamily: '',
    tableLabelFontSize: 12,
    tableLabelBold: true,
    tableLabelItalic: false,
    bgType: 'default',
    bgColor: '#ffffff',
    bgImage: '',
    paperSize: 'a4',
    paperOrientation: 'landscape',
  },
});

let state = DEFAULT_STATE();
let undoStack = [];
const MAX_UNDO = 20;
let dragState = {};
let zoomLevel = 1.0;

function applyZoom(z) {
  zoomLevel = Math.min(3, Math.max(0.25, z));
  const canvas = document.getElementById('canvas');
  canvas.style.transform = `scale(${zoomLevel})`;
  canvas.style.transformOrigin = '0 0';
  // Expand the canvas-area scroll box so scrollbars appear correctly
  canvas.style.marginRight  = `${2400 * (zoomLevel - 1)}px`;
  canvas.style.marginBottom = `${1600 * (zoomLevel - 1)}px`;
  const label = document.getElementById('zoom-label');
  if (label) label.textContent = `${Math.round(zoomLevel * 100)}%`;
}

function applyTableSizeScale() {
  const scale = state.tableSizeScale || 1;
  const root = document.documentElement;
  root.style.setProperty('--seat-size', `${Math.round(52 * scale)}px`);
  root.style.setProperty('--seated-font', `${Math.round(9 * scale)}px`);
}

function updateSizeLabel() {
  const label = document.getElementById('size-label');
  if (label) label.textContent = `⊞ ${Math.round((state.tableSizeScale || 1) * 100)}%`;
}

// ══════════════════════════════════════════════════════════
//  HELPERS
// ══════════════════════════════════════════════════════════

function getGuestById(id) { return state.guests.find(g => g.id === id); }
function getTableById(id) { return state.tables.find(t => t.id === id); }
function getGroupById(id) { return state.groups.find(g => g.id === id); }

function getSeatedGuestIds() {
  const ids = new Set();
  for (const table of state.tables)
    for (const seat of table.seats)
      if (!seat.deleted && seat.guestId) ids.add(seat.guestId);
  return ids;
}

function unassignGuest(guestId) {
  for (const table of state.tables)
    for (const seat of table.seats)
      if (!seat.deleted && seat.guestId === guestId) { seat.guestId = null; return; }
}

function getSeatRecord(tableId, seatIndex) {
  const table = getTableById(tableId);
  if (!table) return null;
  return table.seats.find(s => s.seatIndex === seatIndex) || null;
}

function addGuest(name) {
  state.guests.push({ id: `g_${state.nextGuestId++}`, name, groupId: null });
}

function addGroup(label) {
  const color = GROUP_COLORS[state.groups.length % GROUP_COLORS.length];
  const group = { id: `gr_${state.nextGroupId++}`, label, color };
  state.groups.push(group);
  return group;
}

function getGuestGroup(guest) {
  return guest.groupId ? getGroupById(guest.groupId) : null;
}

function buildRoundSeats(count) {
  return Array.from({ length: count }, (_, i) => ({
    seatIndex: i, guestId: null, deleted: false,
    angle: (360 / count) * i - 90,
  }));
}

function buildRectSeats(count, hasEnds = false) {
  const dist = distributeRectSeats(count, hasEnds);
  const seats = [];
  let idx = 0;
  for (let i = 0; i < dist.top;    i++) seats.push({ seatIndex: idx++, guestId: null, deleted: false, side: 'top',    sideIdx: i });
  for (let i = 0; i < dist.left;   i++) seats.push({ seatIndex: idx++, guestId: null, deleted: false, side: 'left',   sideIdx: i });
  for (let i = 0; i < dist.right;  i++) seats.push({ seatIndex: idx++, guestId: null, deleted: false, side: 'right',  sideIdx: i });
  for (let i = 0; i < dist.bottom; i++) seats.push({ seatIndex: idx++, guestId: null, deleted: false, side: 'bottom', sideIdx: i });
  return seats;
}

function addTable(label, shape, maxSeats, hasEnds = false, color = null) {
  const idx = state.tables.length;
  const offset = idx * 32;
  const tableId = `t_${state.nextTableId++}`;
  state.tables.push({
    id: tableId,
    label,
    shape,
    maxSeats,
    colorIndex: idx % TABLE_COLORS.length,
    color: color,  // null = use TABLE_COLORS[colorIndex]; hex string = custom
    x: 60 + offset,
    y: 60 + offset,
    rotation: 0,
    hasEnds: shape === 'rect' ? hasEnds : false,
    seats: shape === 'round' ? buildRoundSeats(maxSeats) : buildRectSeats(maxSeats, hasEnds),
  });
}

function resizeSeats(table, newMax) {
  // Preserve guest assignments by active-seat position
  const activeSeats = table.seats.filter(s => !s.deleted);
  const guestMap = {};
  activeSeats.forEach((s, i) => { guestMap[i] = s.guestId; });

  // Rebuild seats array fresh with correct angle/side
  const newSeats = table.shape === 'round'
    ? buildRoundSeats(newMax)
    : buildRectSeats(newMax, table.hasEnds || false);

  // Restore guest assignments for seats that still exist
  const toRestore = Math.min(activeSeats.length, newMax);
  for (let i = 0; i < toRestore; i++) {
    newSeats[i].guestId = guestMap[i] || null;
  }

  table.seats = newSeats;
  table.maxSeats = newMax;
}

function deleteTable(tableId) {
  state.tables = state.tables.filter(t => t.id !== tableId);
}

function addSeatToTable(tableId) {
  const table = getTableById(tableId);
  if (!table) return;
  pushUndo();

  // First: restore a previously deleted seat in its original position
  const deletedSeat = table.seats.find(s => s.deleted);
  if (deletedSeat) {
    deletedSeat.deleted = false;
    table.maxSeats = table.seats.filter(s => !s.deleted).length;
    renderAll();
    return;
  }

  const nextIdx = table.seats.length;

  if (table.shape === 'round') {
    // Find largest angular gap among active seats and insert at its midpoint
    const active = table.seats
      .filter(s => !s.deleted)
      .map(s => s.angle !== undefined ? s.angle : (360 / table.seats.length) * s.seatIndex - 90)
      .sort((a, b) => a - b);
    let bestAngle = -90;
    if (active.length === 0) {
      bestAngle = -90;
    } else if (active.length === 1) {
      bestAngle = active[0] + 180;
    } else {
      let maxGap = 0;
      for (let i = 0; i < active.length; i++) {
        const prev = active[i];
        const next = active[(i + 1) % active.length];
        const gap = i === active.length - 1
          ? (next + 360 - prev)
          : (next - prev);
        if (gap > maxGap) {
          maxGap = gap;
          bestAngle = prev + gap / 2;
        }
      }
    }
    table.seats.push({ seatIndex: nextIdx, guestId: null, deleted: false, angle: bestAngle % 360 });
  } else {
    // Rect: add to the side with fewest active seats (prefer top then bottom then left then right)
    const sides = ['top', 'bottom', 'left', 'right'];
    let minCount = Infinity;
    let targetSide = 'top';
    for (const side of sides) {
      const cnt = table.seats.filter(s => s.side === side && !s.deleted).length;
      if (cnt < minCount) { minCount = cnt; targetSide = side; }
    }
    const sideCount = table.seats.filter(s => s.side === targetSide).length;
    table.seats.push({ seatIndex: nextIdx, guestId: null, deleted: false, side: targetSide, sideIdx: sideCount });
  }

  table.maxSeats = table.seats.filter(s => !s.deleted).length;
  renderAll();
}

function duplicateTable(tableId) {
  const src = getTableById(tableId);
  if (!src) return;
  pushUndo();
  const newId = `t_${state.nextTableId++}`;
  // Increment label: "Table 1" → "Table 1 (2)", "Table 1 (2)" → "Table 1 (3)"
  let label = src.label;
  const match = label.match(/^(.*?)\s*\((\d+)\)$/);
  label = match ? `${match[1]} (${parseInt(match[2]) + 1})` : `${label} (2)`;
  // Copy seats with guestIds cleared
  const newSeats = src.seats.map(s => ({ ...s, guestId: null }));
  state.tables.push({
    ...src,
    id: newId,
    label,
    x: src.x + 40,
    y: src.y + 40,
    seats: newSeats,
  });
  renderAll();
}

function normalizeState() {
  if (!Array.isArray(state.groups)) state.groups = [];
  if (!state.nextGroupId) state.nextGroupId = 1;
  if (!Array.isArray(state.textBoxes)) state.textBoxes = [];
  if (state.tableSizeScale === undefined) state.tableSizeScale = 1;
  if (!state.printSettings) state.printSettings = DEFAULT_STATE().printSettings;
  // Backfill any missing printSettings keys
  const defPS = DEFAULT_STATE().printSettings;
  for (const key of Object.keys(defPS)) {
    if (state.printSettings[key] === undefined) state.printSettings[key] = defPS[key];
  }
  for (const g of state.guests) {
    if (g.groupId === undefined) g.groupId = null;
  }
  for (const tb of (state.textBoxes || [])) {
    if (tb.w === undefined) tb.w = null;
    if (tb.h === undefined) tb.h = null;
  }
  for (const table of state.tables) {
    if (table.rotation === undefined) table.rotation = 0;
    if (table.hasEnds === undefined) table.hasEnds = false;
    if (table.color === undefined) table.color = null;
    for (const seat of table.seats) {
      if (seat.deleted === undefined) seat.deleted = false;
    }
    // Backfill angle for round table seats
    if (table.shape === 'round') {
      const total = table.seats.length;
      for (const s of table.seats) {
        if (s.angle === undefined) s.angle = (360 / total) * s.seatIndex - 90;
      }
    }
    // Backfill side/sideIdx for rect table seats
    if (table.shape === 'rect') {
      const hasSide = table.seats.some(s => s.side !== undefined);
      if (!hasSide) {
        const dist = distributeRectSeats(table.seats.length);
        let top = 0, left = 0, right = 0, bottom = 0;
        for (const s of table.seats) {
          if      (top    < dist.top)    { s.side = 'top';    s.sideIdx = top++;    }
          else if (left   < dist.left)   { s.side = 'left';   s.sideIdx = left++;   }
          else if (right  < dist.right)  { s.side = 'right';  s.sideIdx = right++;  }
          else                           { s.side = 'bottom'; s.sideIdx = bottom++; }
        }
      }
    }
  }
}

// ══════════════════════════════════════════════════════════
//  UNDO
// ══════════════════════════════════════════════════════════

function pushUndo() {
  undoStack.push(JSON.stringify(state));
  if (undoStack.length > MAX_UNDO) undoStack.shift();
  document.getElementById('btn-undo').disabled = false;
}

function undo() {
  if (!undoStack.length) return;
  const prev = JSON.parse(undoStack.pop());
  Object.assign(state, prev);
  if (!undoStack.length) document.getElementById('btn-undo').disabled = true;
  renderAll();
  toast(t('toastUndo'));
}

// ══════════════════════════════════════════════════════════
//  TABLE SIZE CALCULATIONS
// ══════════════════════════════════════════════════════════

function getRoundTableSize(seatCount) {
  const scale = state.tableSizeScale || 1;
  const minRadius = 50 * scale;
  const seatSpacing = 60 * scale;
  const radius = Math.max(minRadius, (seatCount * seatSpacing) / (2 * Math.PI));
  return { size: Math.round(radius * 2 + 58 * scale), radius: Math.round(radius) };
}

function computeSeatTransform(i, total, radius) {
  const angleDeg = (360 / total) * i - 90;
  const angleRad = angleDeg * Math.PI / 180;
  const x = Math.round(radius * Math.cos(angleRad));
  const y = Math.round(radius * Math.sin(angleRad));
  return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
}

function computeSeatTransformByAngle(angleDeg, radius) {
  const rad = angleDeg * Math.PI / 180;
  const x = Math.round(radius * Math.cos(rad));
  const y = Math.round(radius * Math.sin(rad));
  return `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
}

function distributeRectSeats(total, hasEnds = false) {
  if (hasEnds && total >= 4) {
    const sideTotal = total - 2;
    return { top: Math.ceil(sideTotal / 2), bottom: Math.floor(sideTotal / 2), left: 1, right: 1 };
  }
  return { top: Math.ceil(total / 2), bottom: Math.floor(total / 2), left: 0, right: 0 };
}

function getRectTableBodySize(seatCount) {
  const { top } = distributeRectSeats(seatCount);
  const width = Math.max(60, top * 56);
  return { width, height: 38 };
}

// ══════════════════════════════════════════════════════════
//  RENDERING
// ══════════════════════════════════════════════════════════

function renderAll() {
  applyTableSizeScale();
  updateSizeLabel();
  renderGuestList();
  renderCanvas();
  updateFooter();
  applyPrintSettings();
  scheduleAutoSave();
}

function renderGuestList() {
  const seatedIds = getSeatedGuestIds();
  const searchVal = document.getElementById('guest-search').value.toLowerCase().trim();
  const listEl = document.getElementById('guest-list');
  listEl.innerHTML = '';

  // Unassigned guests first (A→Z), then assigned guests (A→Z)
  const sorted = [...state.guests].sort((a, b) => {
    const aSeated = seatedIds.has(a.id) ? 1 : 0;
    const bSeated = seatedIds.has(b.id) ? 1 : 0;
    if (aSeated !== bSeated) return aSeated - bSeated;
    return a.name.localeCompare(b.name);
  });

  for (const guest of sorted) {
    const isSeated = seatedIds.has(guest.id);
    const matchesSearch = !searchVal || guest.name.toLowerCase().includes(searchVal);
    const chip = buildGuestChip(guest, isSeated, !matchesSearch);
    listEl.appendChild(chip);
    if (!isSeated) makeGuestChipDraggable(chip);
  }

  document.getElementById('guest-count').textContent = t('guestCount', state.guests.length);
}

function renderCanvas() {
  const canvas = document.getElementById('canvas');
  canvas.querySelectorAll('.table-wrapper').forEach(el => el.remove());

  const hint = document.getElementById('canvas-hint');
  hint.style.display = state.tables.length === 0 ? '' : 'none';

  for (const table of state.tables) {
    const wrapper = buildTableElement(table);
    canvas.appendChild(wrapper);
    makeTableDraggable(wrapper);
    makeTableRotatable(wrapper);
  }

  renderTextBoxes();
}

// ── Print settings ──────────────────────────────────────────
function applyPrintSettings() {
  const s = state.printSettings || {};
  const root = document.documentElement;

  // Typography CSS custom properties
  root.style.setProperty('--pm-name-font',   s.namesFontFamily      || 'inherit');
  root.style.setProperty('--pm-name-size',  (s.namesFontSize  || 10) + 'px');
  root.style.setProperty('--pm-name-weight',  s.namesBold      ? 'bold' : 'normal');
  root.style.setProperty('--pm-name-style',   s.namesItalic    ? 'italic' : 'normal');
  root.style.setProperty('--pm-label-font',  s.tableLabelFontFamily  || 'inherit');
  root.style.setProperty('--pm-label-size', (s.tableLabelFontSize || 12) + 'px');
  root.style.setProperty('--pm-label-weight', s.tableLabelBold !== false ? 'bold' : 'normal');
  root.style.setProperty('--pm-label-style',  s.tableLabelItalic  ? 'italic' : 'normal');

  // Visibility body-class toggles
  document.body.classList.toggle('pm-hide-names',  !s.showNames);
  document.body.classList.toggle('pm-hide-labels', !s.showTableLabels);
  document.body.classList.toggle('pm-hide-groups', !s.showGroupColors);

  // Paper page (creates/updates the white page sheet and @page CSS)
  renderPrintPage();

  syncPrintPanel();
}

function renderPrintPage() {
  const canvas  = document.getElementById('canvas');
  const inPrint = document.body.classList.contains('print-mode');

  // Remove page + injected @page CSS when leaving print mode
  if (!inPrint) {
    document.getElementById('print-page')?.remove();
    document.getElementById('print-page-css')?.remove();
    return;
  }

  const s     = state.printSettings || {};
  const size  = PAPER_SIZES_MM[s.paperSize || 'a4'] || PAPER_SIZES_MM.a4;
  const land  = (s.paperOrientation || 'landscape') === 'landscape';
  const wMM   = land ? Math.max(size.short, size.long) : size.short;
  const hMM   = land ? size.short                      : size.long;
  const wPx   = Math.round(wMM * MM_TO_PX);
  const hPx   = Math.round(hMM * MM_TO_PX);

  // Reuse existing page element to avoid DOM thrashing
  let page       = document.getElementById('print-page');
  const isNew    = !page;
  if (isNew) {
    page          = document.createElement('div');
    page.id       = 'print-page';
  }
  page.style.width  = `${wPx}px`;
  page.style.height = `${hPx}px`;

  // Background — applies to the page sheet, not the studio surround
  if (s.bgType === 'color') {
    page.style.backgroundColor  = s.bgColor || '#fff';
    page.style.backgroundImage  = 'none';
  } else if (s.bgType === 'image' && s.bgImage) {
    page.style.backgroundImage    = `url(${s.bgImage})`;
    page.style.backgroundSize     = 'cover';
    page.style.backgroundPosition = 'center';
    page.style.backgroundColor    = '';
  } else {
    page.style.backgroundColor  = '#fff';
    page.style.backgroundImage  = 'none';
  }

  if (isNew) {
    // Insert before everything else so tables/text-boxes paint on top
    canvas.insertBefore(page, canvas.firstElementChild || null);
    // Scroll the studio to show the top-left of the page
    const ca = document.getElementById('canvas-area');
    ca.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  // Inject/update @page rule + print-time canvas clipping
  let styleEl = document.getElementById('print-page-css');
  if (!styleEl) {
    styleEl    = document.createElement('style');
    styleEl.id = 'print-page-css';
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = [
    `@page { size: ${wMM}mm ${hMM}mm; margin: 0; }`,
    `@media print {`,
    `  #canvas {`,
    `    width: ${wPx}px !important;`,
    `    height: ${hPx}px !important;`,
    `    overflow: hidden !important;`,
    `    min-width: 0 !important;`,
    `    min-height: 0 !important;`,
    `  }`,
    `}`,
  ].join('\n');
}

function syncPrintPanel() {
  const s = state.printSettings || {};
  const el = (id) => document.getElementById(id);

  const pn = el('pp-show-names');   if (pn) pn.checked = s.showNames !== false;
  const pl = el('pp-show-labels');  if (pl) pl.checked = s.showTableLabels !== false;
  const pg = el('pp-show-groups');  if (pg) pg.checked = s.showGroupColors !== false;

  const nf = el('pp-names-font');   if (nf) nf.value = s.namesFontFamily || '';
  const ns = el('pp-names-size');   if (ns) ns.value  = s.namesFontSize  || 10;
  const nb = el('pp-names-bold');   if (nb) nb.classList.toggle('active', !!s.namesBold);
  const ni = el('pp-names-italic'); if (ni) ni.classList.toggle('active', !!s.namesItalic);

  const lf = el('pp-labels-font');   if (lf) lf.value = s.tableLabelFontFamily || '';
  const ls = el('pp-labels-size');   if (ls) ls.value  = s.tableLabelFontSize  || 12;
  const lb = el('pp-labels-bold');   if (lb) lb.classList.toggle('active', s.tableLabelBold !== false);
  const li = el('pp-labels-italic'); if (li) li.classList.toggle('active', !!s.tableLabelItalic);

  const bgRadio = document.querySelector(`input[name="pp-bg"][value="${s.bgType || 'default'}"]`);
  if (bgRadio) bgRadio.checked = true;
  const bc = el('pp-bg-color'); if (bc) bc.value = s.bgColor || '#ffffff';

  const ppSz   = el('pp-paper-size'); if (ppSz) ppSz.value = s.paperSize || 'a4';
  const ppPort = el('pp-portrait');   if (ppPort) ppPort.classList.toggle('active', (s.paperOrientation || 'landscape') === 'portrait');
  const ppLand = el('pp-landscape');  if (ppLand) ppLand.classList.toggle('active', (s.paperOrientation || 'landscape') === 'landscape');
}

// ── Text boxes ───────────────────────────────────────────────
function renderTextBoxes() {
  const canvas = document.getElementById('canvas');
  canvas.querySelectorAll('.text-box-wrapper').forEach(el => el.remove());
  for (const tb of (state.textBoxes || [])) {
    const el = buildTextBoxElement(tb);
    canvas.appendChild(el);
    makeTextBoxDraggable(el);
  }
}

function buildTextBoxElement(tb) {
  const wrapper = document.createElement('div');
  wrapper.className = 'text-box-wrapper';
  wrapper.dataset.tbId = tb.id;
  wrapper.style.left  = `${tb.x || 200}px`;
  wrapper.style.top   = `${tb.y || 200}px`;
  wrapper.style.width = `${tb.w || 180}px`;
  if (tb.h) wrapper.style.height = `${tb.h}px`;

  // ── Toolbar (drag handle + formatting) ──
  const header = document.createElement('div');
  header.className = 'text-box-header';

  const fontSel = document.createElement('select');
  fontSel.className = 'tb-select';
  FONT_OPTIONS.forEach(([val, lbl]) => {
    const opt = document.createElement('option');
    opt.value = val; opt.textContent = lbl;
    if ((tb.fontFamily || '') === val) opt.selected = true;
    fontSel.appendChild(opt);
  });

  const sizeIn = document.createElement('input');
  sizeIn.type = 'number'; sizeIn.className = 'tb-size-input';
  sizeIn.value = tb.fontSize || 18; sizeIn.min = 6; sizeIn.max = 120;

  const boldBtn = document.createElement('button');
  boldBtn.className = 'tb-fmt-btn' + (tb.bold ? ' active' : '');
  boldBtn.textContent = 'B'; boldBtn.title = 'Bold';

  const italicBtn = document.createElement('button');
  italicBtn.className = 'tb-fmt-btn italic' + (tb.italic ? ' active' : '');
  italicBtn.textContent = 'I'; italicBtn.title = 'Italic';

  const colorIn = document.createElement('input');
  colorIn.type = 'color'; colorIn.className = 'tb-color-input';
  colorIn.value = tb.color || '#333333'; colorIn.title = 'Text color';

  const delBtn = document.createElement('button');
  delBtn.className = 'tb-fmt-btn tb-delete-btn'; delBtn.textContent = '×'; delBtn.title = 'Delete';

  header.appendChild(fontSel);
  header.appendChild(sizeIn);
  header.appendChild(boldBtn);
  header.appendChild(italicBtn);
  header.appendChild(colorIn);
  header.appendChild(delBtn);

  // ── Editable content ──
  const content = document.createElement('div');
  content.className = 'text-box-content';
  content.contentEditable = 'true';
  content.textContent = tb.text || 'Text';
  applyTextBoxStyle(tb, content);

  // ── Resize handle (bottom-right grip) ──
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'text-box-resize-handle';

  wrapper.appendChild(header);
  wrapper.appendChild(content);
  wrapper.appendChild(resizeHandle);

  // ── Event handlers ──
  const refresh = () => { applyTextBoxStyle(tb, content); scheduleAutoSave(); };

  fontSel.addEventListener('change', (e) => { e.stopPropagation(); tb.fontFamily = fontSel.value; refresh(); });
  sizeIn.addEventListener('change',  (e) => { e.stopPropagation(); tb.fontSize = parseInt(sizeIn.value) || 18; refresh(); });
  boldBtn.addEventListener('click',   (e) => { e.stopPropagation(); tb.bold   = !tb.bold;   boldBtn.classList.toggle('active', tb.bold);     refresh(); });
  italicBtn.addEventListener('click', (e) => { e.stopPropagation(); tb.italic = !tb.italic; italicBtn.classList.toggle('active', tb.italic); refresh(); });
  colorIn.addEventListener('input',   (e) => { e.stopPropagation(); tb.color  = colorIn.value; refresh(); });
  delBtn.addEventListener('click',    (e) => {
    e.stopPropagation();
    pushUndo();
    state.textBoxes = state.textBoxes.filter(t => t.id !== tb.id);
    wrapper.remove();
    scheduleAutoSave();
  });
  content.addEventListener('input',   () => { tb.text = content.textContent; scheduleAutoSave(); });
  content.addEventListener('keydown', (e) => { if (e.key === 'Escape') content.blur(); });

  return wrapper;
}

function applyTextBoxStyle(tb, el) {
  el.style.fontFamily = tb.fontFamily || 'inherit';
  el.style.fontSize   = (tb.fontSize  || 18) + 'px';
  el.style.fontWeight = tb.bold   ? 'bold'   : 'normal';
  el.style.fontStyle  = tb.italic ? 'italic' : 'normal';
  el.style.color      = tb.color  || '#333333';
}

function makeTextBoxDraggable(wrapperEl) {
  interact(wrapperEl)
    .draggable({
      allowFrom: '.text-box-header',
      inertia: false,
      listeners: {
        move(event) {
          const tbId = event.target.dataset.tbId;
          const tb = (state.textBoxes || []).find(t => t.id === tbId);
          if (!tb) return;
          tb.x = (tb.x || 0) + event.dx / zoomLevel;
          tb.y = (tb.y || 0) + event.dy / zoomLevel;
          event.target.style.left = `${tb.x}px`;
          event.target.style.top  = `${tb.y}px`;
        },
        end() { scheduleAutoSave(); }
      }
    })
    .resizable({
      edges: { right: true, bottom: true },
      inertia: false,
      modifiers: [
        interact.modifiers.restrictSize({ min: { width: 80, height: 36 } }),
      ],
      listeners: {
        move(event) {
          const tbId = event.target.dataset.tbId;
          const tb = (state.textBoxes || []).find(t => t.id === tbId);
          if (!tb) return;
          tb.w = Math.round(event.rect.width);
          tb.h = Math.round(event.rect.height);
          event.target.style.width  = `${tb.w}px`;
          event.target.style.height = `${tb.h}px`;
        },
        end() { scheduleAutoSave(); }
      }
    });
}

function updateFooter() {
  const seatedIds = getSeatedGuestIds();
  const seated = seatedIds.size;
  const total = state.guests.length;
  document.getElementById('footer-stats').textContent = t('footerSeated', seated, total - seated);
  document.getElementById('footer-tables').textContent = t('footerTables', state.tables.length);
}

function applyTranslations() {
  document.getElementById('app-title').textContent = t('appTitle');
  startSubtitleCycle();
  document.getElementById('btn-add-table').textContent = t('btnAddTable');
  document.getElementById('btn-import-csv').textContent = t('btnCsvImport');
  document.getElementById('btn-auto-assign').textContent = t('btnAutoAssign');
  document.getElementById('btn-undo').innerHTML = t('btnUndo');
  document.getElementById('btn-save-plan').textContent = t('btnSavePlan');
  document.getElementById('btn-load-plan').textContent = t('btnLoadPlan');
  document.getElementById('btn-export-csv').textContent = t('btnExportCsv');
  document.getElementById('btn-print').textContent = t('btnPrint');
  document.getElementById('btn-clear-tables').textContent = t('btnClearTables');
  document.getElementById('btn-clear-guests').textContent = t('btnClearGuests');
  document.getElementById('lbl-add-guests').textContent = t('addGuestsLabel');
  document.getElementById('guest-input').placeholder = t('addGuestsPlaceholder');
  document.getElementById('btn-add-guests').textContent = t('btnAddGuests');
  document.getElementById('lbl-guest-list').textContent = t('guestListLabel');
  document.getElementById('guest-search').placeholder = t('searchPlaceholder');
  document.getElementById('hint-p').innerHTML = t('canvasHintP');
  document.getElementById('hint-small').textContent = t('canvasHintSmall');
  document.getElementById('lbl-modal-label').textContent = t('modalLabelLabel');
  document.getElementById('lbl-modal-shape').textContent = t('modalShapeLabel');
  document.querySelector('#modal-shape option[value="round"]').textContent = t('shapeRound');
  document.querySelector('#modal-shape option[value="rect"]').textContent = t('shapeRect');
  document.getElementById('lbl-modal-seats').textContent = t('modalSeatsLabel');
  document.getElementById('lbl-modal-ends').textContent = t('modalEndsLabel');
  document.getElementById('modal-cancel').textContent = t('modalCancel');
  document.getElementById('modal-save').textContent = t('modalSave');
  document.getElementById('confirm-cancel').textContent = t('confirmCancel');
  document.getElementById('group-new-input').placeholder = t('newGroupPlaceholder');
  document.getElementById('btn-lang-toggle').textContent = currentLang === 'en' ? '🇸🇪' : '🇬🇧';
  renderAll();
}

// ── Build Guest Chip ──

function buildGuestChip(guest, isSeated, isHidden) {
  const chip = document.createElement('div');
  chip.className = 'guest-chip' +
    (isSeated ? ' seated' : '') +
    (isHidden ? ' hidden-chip' : '');
  chip.dataset.guestId = guest.id;
  chip.dataset.type = 'guest';

  // Group color dot
  const groupDot = document.createElement('div');
  const grp = getGuestGroup(guest);
  groupDot.className = 'group-dot' + (!grp ? ' no-group' : '');
  if (grp) groupDot.style.background = grp.color;
  groupDot.title = grp ? grp.label : t('groupAssignTitle');
  groupDot.addEventListener('click', (e) => {
    e.stopPropagation();
    openGroupPopover(guest.id, groupDot);
  });

  const nameSpan = document.createElement('span');
  nameSpan.className = 'guest-name';
  nameSpan.textContent = guest.name;
  nameSpan.title = guest.name;

  // Rename
  const renameBtn = document.createElement('button');
  renameBtn.className = 'chip-btn rename-btn';
  renameBtn.innerHTML = '✏';
  renameBtn.title = t('renameTitle');
  renameBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nameSpan.contentEditable = 'true';
    nameSpan.focus();
    const range = document.createRange();
    range.selectNodeContents(nameSpan);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  });

  nameSpan.addEventListener('blur', () => {
    const newName = nameSpan.textContent.trim();
    nameSpan.contentEditable = 'false';
    if (newName && newName !== guest.name) {
      pushUndo();
      guest.name = newName;
      renderAll();
    } else {
      nameSpan.textContent = guest.name;
    }
  });

  nameSpan.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); nameSpan.blur(); }
    if (e.key === 'Escape') { nameSpan.textContent = guest.name; nameSpan.blur(); }
  });

  // Delete
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'chip-btn delete-btn';
  deleteBtn.innerHTML = '✕';
  deleteBtn.title = t('removeGuestTitle');
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    pushUndo();
    unassignGuest(guest.id);
    state.guests = state.guests.filter(g => g.id !== guest.id);
    renderAll();
  });

  chip.appendChild(groupDot);
  chip.appendChild(nameSpan);
  chip.appendChild(renameBtn);
  chip.appendChild(deleteBtn);
  return chip;
}

// ── Build Table Element ──

function buildTableElement(table) {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  wrapper.dataset.tableId = table.id;
  wrapper.style.left = `${table.x}px`;
  wrapper.style.top = `${table.y}px`;
  wrapper.style.setProperty('--table-rot', `${table.rotation || 0}deg`);
  if (table.rotation) {
    wrapper.style.transform = `rotate(${table.rotation}deg)`;
  }

  // Table body (directly in wrapper — no drag-handle bar or body-wrapper box)
  const body = document.createElement('div');
  body.className = `table-body ${table.shape}`;

  if (table.shape === 'round') {
    buildRoundTableBody(body, table);
  } else {
    buildRectTableBody(body, table);
  }

  // Actions overlay — hidden by default, shown on hover via CSS
  const actions = document.createElement('div');
  actions.className = 'table-actions-overlay';

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm';
  editBtn.textContent = t('tableEditBtn');
  editBtn.addEventListener('click', () => openTableModal(table.id));

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-sm btn-danger';
  deleteBtn.textContent = t('tableDeleteBtn');
  deleteBtn.addEventListener('click', () => confirmDeleteTable(table.id));

  const addSeatBtn = document.createElement('button');
  addSeatBtn.className = 'btn btn-sm';
  addSeatBtn.textContent = '+';
  addSeatBtn.title = t('addSeatTitle');
  addSeatBtn.addEventListener('click', () => addSeatToTable(table.id));

  const duplicateBtn = document.createElement('button');
  duplicateBtn.className = 'btn btn-sm';
  duplicateBtn.textContent = '⧉';
  duplicateBtn.title = t('duplicateTableTitle');
  duplicateBtn.addEventListener('click', () => duplicateTable(table.id));

  actions.appendChild(addSeatBtn);
  actions.appendChild(editBtn);
  actions.appendChild(duplicateBtn);
  actions.appendChild(deleteBtn);

  // Rotation handle
  const rotHandle = document.createElement('div');
  rotHandle.className = 'rotation-handle';
  rotHandle.innerHTML = '↻';
  rotHandle.title = t('rotateTitle');

  wrapper.appendChild(body);
  wrapper.appendChild(actions);
  wrapper.appendChild(rotHandle);

  return wrapper;
}

function buildRoundTableBody(bodyEl, table) {
  const activeSeats = table.seats.filter(s => !s.deleted);
  // Size based on active seats so the table shrinks/grows as seats are added/deleted
  const activeCount = activeSeats.length || 1;
  const totalCount  = table.seats.length  || 1;  // for angle fallback only
  const { size, radius } = getRoundTableSize(activeCount);
  const color = table.color || TABLE_COLORS[table.colorIndex % TABLE_COLORS.length];
  const discSize = Math.max(44, Math.round(size * 0.42));

  bodyEl.style.width = `${size}px`;
  bodyEl.style.height = `${size}px`;

  const disc = document.createElement('div');
  disc.className = 'table-disc';
  disc.style.width = `${discSize}px`;
  disc.style.height = `${discSize}px`;
  disc.style.background = color;
  disc.style.boxShadow = `0 2px 8px ${color}55`;
  disc.style.color = isLightColor(color) ? '#3d2b1a' : '#ffffff';
  disc.innerHTML = `<span>${table.label}</span>`;

  // Double-click on disc to rename table inline
  disc.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    const span = disc.querySelector('span');
    span.contentEditable = 'true';
    span.focus();
    const range = document.createRange();
    range.selectNodeContents(span);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    span.addEventListener('blur', function onBlur() {
      span.removeEventListener('blur', onBlur);
      const newLabel = span.textContent.trim();
      if (newLabel) { pushUndo(); table.label = newLabel; }
      span.contentEditable = 'false';
      renderAll();
    }, { once: true });
    span.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
      if (e.key === 'Escape') { span.textContent = table.label; span.blur(); }
    });
  });

  bodyEl.appendChild(disc);

  // Render only active seats, each at their stored absolute angle
  activeSeats.forEach((seat) => {
    const seatEl = buildSeatElement(seat, table, seat.seatIndex);
    seatEl.style.position = 'absolute';
    seatEl.style.top = '50%';
    seatEl.style.left = '50%';
    const angle = seat.angle !== undefined ? seat.angle : (360 / totalCount) * seat.seatIndex - 90;
    seatEl.style.transform = computeSeatTransformByAngle(angle, radius);
    bodyEl.appendChild(seatEl);
    makeSeatDroppable(seatEl, color);
  });
}

function buildRectTableBody(bodyEl, table) {
  const color = table.color || TABLE_COLORS[table.colorIndex % TABLE_COLORS.length];

  // Group all seats by stored side
  const bySide = (side) => table.seats.filter(s => s.side === side);
  const topSeats    = bySide('top');
  const leftSeats   = bySide('left');
  const rightSeats  = bySide('right');
  const bottomSeats = bySide('bottom');

  // Width based on total top seat slots (including deleted) so gaps are preserved
  const topTotal = topSeats.length || 1;
  const scale = state.tableSizeScale || 1;
  const width = Math.max(60, topTotal * 56 * scale);
  const height = 38 * scale;

  // Returns a seat element, or an invisible spacer for deleted seats (preserves gap)
  function makeSeatEl(seat) {
    if (seat.deleted) {
      const spacer = document.createElement('div');
      spacer.className = 'seat-spacer';
      return spacer;
    }
    const seatEl = buildSeatElement(seat, table, seat.seatIndex);
    makeSeatDroppable(seatEl, color);
    return seatEl;
  }

  // Top row
  const topRow = document.createElement('div');
  topRow.className = 'seats-row';
  for (const seat of topSeats) {
    topRow.appendChild(makeSeatEl(seat));
  }
  bodyEl.appendChild(topRow);

  // Middle row (left seat + table surface + right seat)
  const middleRow = document.createElement('div');
  middleRow.className = 'table-rect-surface';

  for (const seat of leftSeats) {
    middleRow.appendChild(makeSeatEl(seat));
  }

  const rectBody = document.createElement('div');
  rectBody.className = 'table-rect-body';
  rectBody.style.width = `${width}px`;
  rectBody.style.height = `${height}px`;
  rectBody.style.background = color;
  rectBody.style.boxShadow = `0 2px 8px ${color}55`;
  rectBody.style.color = isLightColor(color) ? '#3d2b1a' : '#ffffff';
  rectBody.innerHTML = `<span>${table.label}</span>`;

  // Double-click on rect body to rename table inline
  rectBody.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    const span = rectBody.querySelector('span');
    span.contentEditable = 'true';
    span.focus();
    const range = document.createRange();
    range.selectNodeContents(span);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    span.addEventListener('blur', function onBlur() {
      span.removeEventListener('blur', onBlur);
      const newLabel = span.textContent.trim();
      if (newLabel) { pushUndo(); table.label = newLabel; }
      span.contentEditable = 'false';
      renderAll();
    }, { once: true });
    span.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); span.blur(); }
      if (e.key === 'Escape') { span.textContent = table.label; span.blur(); }
    });
  });

  middleRow.appendChild(rectBody);

  for (const seat of rightSeats) {
    middleRow.appendChild(makeSeatEl(seat));
  }

  bodyEl.appendChild(middleRow);

  // Bottom row
  const bottomRow = document.createElement('div');
  bottomRow.className = 'seats-row';
  for (const seat of bottomSeats) {
    bottomRow.appendChild(makeSeatEl(seat));
  }
  bodyEl.appendChild(bottomRow);
}

function buildSeatElement(seat, table, seatIndex) {
  const seatEl = document.createElement('div');
  seatEl.className = 'seat' + (seat.guestId ? ' occupied' : '');
  seatEl.dataset.tableId = table.id;
  seatEl.dataset.seatIndex = seatIndex;

  if (seat.guestId) {
    const guest = getGuestById(seat.guestId);
    if (guest) {
      const grp = getGuestGroup(guest);
      if (grp) {
        seatEl.classList.add('has-group');
        seatEl.style.setProperty('--group-color', grp.color);
      }
      seatEl.title = guest.name;
      const seatedChip = buildSeatedChip(guest, table.id, seatIndex);
      seatEl.appendChild(seatedChip);

      const unseatBtn = document.createElement('button');
      unseatBtn.className = 'unseat-btn';
      unseatBtn.innerHTML = '✕';
      unseatBtn.title = t('unseatTitle');
      unseatBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pushUndo();
        seat.guestId = null;
        renderAll();
      });
      seatEl.appendChild(unseatBtn);
    }
  } else {
    seatEl.title = t('seatTitle', seatIndex + 1);
  }

  // Delete seat button (top-left corner)
  const deleteSeatBtn = document.createElement('button');
  deleteSeatBtn.className = 'delete-seat-btn';
  deleteSeatBtn.innerHTML = '&times;';
  deleteSeatBtn.title = t('deleteSeatTitle');
  deleteSeatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    pushUndo();
    if (seat.guestId) seat.guestId = null;
    seat.deleted = true;
    renderAll();
  });
  seatEl.appendChild(deleteSeatBtn);

  return seatEl;
}

function buildSeatedChip(guest, tableId, seatIndex) {
  const chip = document.createElement('div');
  chip.className = 'seated-chip';
  chip.dataset.guestId = guest.id;
  chip.dataset.type = 'seated';
  chip.dataset.tableId = tableId;
  chip.dataset.seatIndex = seatIndex;
  chip.title = guest.name;
  chip.style.touchAction = 'none';

  const nameEl = document.createElement('div');
  nameEl.className = 'seated-name';
  nameEl.textContent = guest.name;
  chip.appendChild(nameEl);

  const grp = getGuestGroup(guest);
  if (grp) {
    const groupLabel = document.createElement('div');
    groupLabel.className = 'seated-group-label';
    groupLabel.textContent = grp.label;
    groupLabel.style.color = grp.color;
    chip.appendChild(groupLabel);
  }

  makeSeatedChipDraggable(chip);
  return chip;
}

// ══════════════════════════════════════════════════════════
//  INTERACT.JS — DRAG AND DROP
// ══════════════════════════════════════════════════════════

function makeGuestChipDraggable(chipEl) {
  interact(chipEl).draggable({
    inertia: false,
    autoScroll: { container: document.getElementById('canvas-area') },
    listeners: {
      start(event) {
        const el = event.target;

        // Create a fixed-position visual proxy on <body> so it is never
        // clipped by #guest-list-container's overflow or any ancestor.
        const rect = el.getBoundingClientRect();
        const proxy = el.cloneNode(true);
        proxy.style.cssText = [
          'position:fixed',
          `left:${rect.left}px`,
          `top:${rect.top}px`,
          `width:${rect.width}px`,
          'margin:0',
          'z-index:99999',
          'pointer-events:none',
          'opacity:0.9',
          'cursor:grabbing',
          'transform:none',
        ].join(';');
        document.body.appendChild(proxy);

        // Hide original in-place so layout is preserved
        el.style.opacity = '0';

        dragState = {
          guestId: el.dataset.guestId,
          sourceType: 'list',
          sourceSeatTableId: null,
          sourceSeatIndex: null,
          dropped: false,
          activeDropTableId: null,
          activeDropSeatIndex: null,
          _hoverSeatEl: null,
          _proxy: proxy,
          _proxyLeft: rect.left,
          _proxyTop: rect.top,
        };
      },
      move(event) {
        const el = event.target;

        // Move the proxy
        if (dragState._proxy) {
          dragState._proxyLeft += event.dx;
          dragState._proxyTop  += event.dy;
          dragState._proxy.style.left = `${dragState._proxyLeft}px`;
          dragState._proxy.style.top  = `${dragState._proxyTop}px`;
        }

        // Reliable seat detection via elementFromPoint at pointer position.
        // Temporarily hide proxy so it doesn't block the hit-test.
        if (dragState._proxy) dragState._proxy.style.display = 'none';
        const under = document.elementFromPoint(event.client.x, event.client.y);
        if (dragState._proxy) dragState._proxy.style.display = '';
        const seatEl = under ? under.closest('.seat') : null;

        // Clear previous highlight if moved away
        if (dragState._hoverSeatEl && dragState._hoverSeatEl !== seatEl) {
          dragState._hoverSeatEl.classList.remove('drag-over-accept', 'drag-over-swap', 'drag-over-reject');
          dragState._hoverSeatEl = null;
        }

        if (seatEl) {
          const tid = seatEl.dataset.tableId;
          const si  = parseInt(seatEl.dataset.seatIndex);
          const rec = getSeatRecord(tid, si);
          if (rec && !rec.deleted) {
            dragState.activeDropTableId   = tid;
            dragState.activeDropSeatIndex = si;
            dragState._hoverSeatEl        = seatEl;
            // Unconditionally re-apply the correct highlight class so it survives
            // any rapid dragenter/dragleave flicker from interact.js bounding-box checks.
            seatEl.classList.remove('drag-over-accept', 'drag-over-reject', 'drag-over-swap');
            if (rec.guestId === null)
              seatEl.classList.add('drag-over-accept');
            else
              seatEl.classList.add('drag-over-swap'); // occupied → displace
          }
        } else {
          dragState.activeDropTableId   = null;
          dragState.activeDropSeatIndex = null;
        }
      },
      end(event) {
        const el = event.target;

        // Remove proxy and restore original chip visibility
        if (dragState._proxy) {
          dragState._proxy.remove();
        }
        el.style.opacity = '';

        // Clear any leftover hover highlights
        if (dragState._hoverSeatEl) {
          dragState._hoverSeatEl.classList.remove('drag-over-accept', 'drag-over-swap', 'drag-over-reject');
        }

        // Drop using tracked seat (works even when interact.js drop event missed)
        if (!dragState.dropped && dragState.activeDropTableId != null) {
          const tableId = dragState.activeDropTableId;
          const seatIndex = dragState.activeDropSeatIndex;
          const guestId = dragState.guestId;
          const seat = getSeatRecord(tableId, seatIndex);
          if (seat && !seat.deleted && guestId) {
            pushUndo();
            seat.guestId = guestId; // displaces any existing occupant (they become unassigned)
            dragState.dropped = true;
            renderAll();
          }
        }

        if (!dragState.dropped) {
          // Chip was hidden; just snap it back (no transform to animate)
          el.dataset.dndX = 0;
          el.dataset.dndY = 0;
        }
        dragState = {};
      }
    }
  });
}

function makeSeatedChipDraggable(chipEl) {
  interact(chipEl).draggable({
    inertia: false,
    autoScroll: { container: document.getElementById('canvas-area') },
    listeners: {
      start(event) {
        const el = event.target;
        event.stopPropagation();
        // Reset any accumulated translate from a previous drag
        el.style.transform = 'translate(0,0)';
        el.dataset.dndX = 0;
        el.dataset.dndY = 0;
        dragState = {
          guestId: el.dataset.guestId,
          sourceType: 'seat',
          sourceSeatTableId: el.dataset.tableId,
          sourceSeatIndex: parseInt(el.dataset.seatIndex),
          dropped: false,
          activeDropTableId: null,
          activeDropSeatIndex: null,
          _hoverSeatEl: null,
        };
        const seat = el.closest('.seat');
        if (seat) seat.classList.add('dragging');
        el.style.zIndex = 9999;
      },
      move(event) {
        const el = event.target;

        // event.dx/dy are screen-space pixels (same unit as table dragging).
        // Step 1 – convert to canvas-coordinate units (undo canvas scale).
        const cdx = event.dx / zoomLevel;
        const cdy = event.dy / zoomLevel;

        // Step 2 – convert from canvas space into the table-wrapper's rotated
        // local space by applying the inverse of its CSS rotation matrix.
        // For a pure rotation R, R⁻¹ = Rᵀ.
        // CSS matrix(a,b,c,d,…): forward is  x'=a·x+c·y, y'=b·x+d·y
        //                        inverse is  x =a·x'+b·y', y=c·x'+d·y'
        const wrapper = el.closest('.table-wrapper');
        let ldx = cdx, ldy = cdy;
        if (wrapper) {
          const ts = getComputedStyle(wrapper).transform;
          if (ts && ts !== 'none') {
            const m = new DOMMatrix(ts);
            ldx = m.a * cdx + m.b * cdy;
            ldy = m.c * cdx + m.d * cdy;
          }
        }

        const x = (parseFloat(el.dataset.dndX) || 0) + ldx;
        const y = (parseFloat(el.dataset.dndY) || 0) + ldy;
        el.style.transform = `translate(${x}px, ${y}px)`;
        el.dataset.dndX = x;
        el.dataset.dndY = y;

        // Seat hit-testing via elementFromPoint
        el.style.pointerEvents = 'none';
        const under = document.elementFromPoint(event.client.x, event.client.y);
        el.style.pointerEvents = '';
        const seatEl = under ? under.closest('.seat') : null;

        // Skip the source seat for visual highlight
        const isSrcSeat = seatEl &&
          seatEl.dataset.tableId === dragState.sourceSeatTableId &&
          parseInt(seatEl.dataset.seatIndex) === dragState.sourceSeatIndex;

        // Clear previous highlight if moved away
        if (dragState._hoverSeatEl && dragState._hoverSeatEl !== seatEl) {
          dragState._hoverSeatEl.classList.remove('drag-over-accept', 'drag-over-swap', 'drag-over-reject');
          dragState._hoverSeatEl = null;
        }

        if (seatEl && !isSrcSeat) {
          const tid = seatEl.dataset.tableId;
          const si  = parseInt(seatEl.dataset.seatIndex);
          const rec = getSeatRecord(tid, si);
          if (rec && !rec.deleted) {
            dragState.activeDropTableId   = tid;
            dragState.activeDropSeatIndex = si;
            dragState._hoverSeatEl        = seatEl;
            if (!seatEl.classList.contains('drag-over-accept') &&
                !seatEl.classList.contains('drag-over-swap') &&
                !seatEl.classList.contains('drag-over-reject')) {
              if (rec.guestId === null)
                seatEl.classList.add('drag-over-accept');
              else if (rec.guestId !== dragState.guestId)
                seatEl.classList.add('drag-over-swap');
              else
                seatEl.classList.add('drag-over-reject');
            }
          }
        } else if (!seatEl || isSrcSeat) {
          dragState.activeDropTableId   = null;
          dragState.activeDropSeatIndex = null;
        }
      },
      end(event) {
        const el = event.target;
        const seat = el.closest('.seat');
        if (seat) seat.classList.remove('dragging');

        // Clear any leftover hover highlights
        if (dragState._hoverSeatEl) {
          dragState._hoverSeatEl.classList.remove('drag-over-accept', 'drag-over-swap', 'drag-over-reject');
        }

        // Drop using tracked seat
        if (!dragState.dropped && dragState.activeDropTableId != null) {
          const tableId = dragState.activeDropTableId;
          const seatIndex = dragState.activeDropSeatIndex;
          const guestId = dragState.guestId;
          const targetSeat = getSeatRecord(tableId, seatIndex);
          const isSelf = dragState.sourceSeatTableId === tableId &&
                         dragState.sourceSeatIndex === seatIndex;
          if (targetSeat && !targetSeat.deleted && guestId && !isSelf) {
            pushUndo();
            if (targetSeat.guestId === null) {
              targetSeat.guestId = guestId;
              const srcSeat = getSeatRecord(dragState.sourceSeatTableId, dragState.sourceSeatIndex);
              if (srcSeat) srcSeat.guestId = null;
            } else {
              const srcSeat = getSeatRecord(dragState.sourceSeatTableId, dragState.sourceSeatIndex);
              if (srcSeat) {
                const displaced = targetSeat.guestId;
                targetSeat.guestId = guestId;
                srcSeat.guestId = displaced;
              }
            }
            dragState.dropped = true;
            renderAll();
          }
        }

        if (!dragState.dropped) {
          el.style.transform = 'translate(0,0)';
          el.dataset.dndX = 0;
          el.dataset.dndY = 0;
        }
        el.style.zIndex = '';
        dragState = {};
      }
    }
  });
}

function makeSeatDroppable(seatEl, tableColor) {
  interact(seatEl).dropzone({
    accept: '[data-type="guest"], [data-type="seated"]',
    overlap: 0.5,
    listeners: {
      dragenter(event) {
        const target = event.target;
        const tableId = target.dataset.tableId;
        const seatIndex = parseInt(target.dataset.seatIndex);
        const seat = getSeatRecord(tableId, seatIndex);
        if (!seat) return;

        // Track for fallback
        dragState.activeDropTableId = tableId;
        dragState.activeDropSeatIndex = seatIndex;

        if (seat.guestId === null) {
          target.classList.add('drag-over-accept');
        } else if (seat.guestId !== dragState.guestId) {
          target.classList.add('drag-over-swap'); // swap for both list→seat and seat→seat
        } else {
          target.classList.add('drag-over-reject');
        }
      },
      dragleave(event) {
        const target = event.target;
        target.classList.remove('drag-over-accept', 'drag-over-reject', 'drag-over-swap');
        if (dragState.activeDropTableId === target.dataset.tableId &&
            dragState.activeDropSeatIndex === parseInt(target.dataset.seatIndex)) {
          dragState.activeDropTableId = null;
          dragState.activeDropSeatIndex = null;
        }
      },
      drop(event) {
        const target = event.target;
        target.classList.remove('drag-over-accept', 'drag-over-reject', 'drag-over-swap');

        const tableId = target.dataset.tableId;
        const seatIndex = parseInt(target.dataset.seatIndex);
        const guestId = dragState.guestId;
        if (!guestId || !tableId) return;

        const seat = getSeatRecord(tableId, seatIndex);
        if (!seat || seat.deleted) return;

        if (dragState.sourceType === 'seat' &&
            dragState.sourceSeatTableId === tableId &&
            dragState.sourceSeatIndex === seatIndex) return;

        pushUndo();

        if (seat.guestId === null) {
          seat.guestId = guestId;
          if (dragState.sourceType === 'seat') {
            const srcSeat = getSeatRecord(dragState.sourceSeatTableId, dragState.sourceSeatIndex);
            if (srcSeat) srcSeat.guestId = null;
          }
        } else {
          if (dragState.sourceType === 'seat') {
            // Seat-to-seat swap: the two guests exchange places
            const srcSeat = getSeatRecord(dragState.sourceSeatTableId, dragState.sourceSeatIndex);
            if (srcSeat) {
              const displaced = seat.guestId;
              seat.guestId = guestId;
              srcSeat.guestId = displaced;
            }
          } else {
            // Guest-list-to-occupied-seat: unassigned guest displaces the current occupant
            seat.guestId = guestId;
            // The displaced guest is still in state.guests; they will appear unassigned
          }
        }

        dragState.dropped = true;
        renderAll();
      }
    }
  });
}

function makeTableDraggable(wrapperEl) {
  interact(wrapperEl).draggable({
    allowFrom: '.table-body',
    ignoreFrom: 'button, .seat, .rotation-handle',
    inertia: false,
    listeners: {
      move(event) {
        const tableId = event.target.dataset.tableId;
        const table = getTableById(tableId);
        if (!table) return;
        table.x = (table.x || 0) + event.dx / zoomLevel;
        table.y = Math.max(0, (table.y || 0) + event.dy / zoomLevel);
        event.target.style.left = `${table.x}px`;
        event.target.style.top = `${table.y}px`;
      },
      end() { scheduleAutoSave(); }
    }
  });
}

function makeTableRotatable(wrapperEl) {
  const rotHandle = wrapperEl.querySelector('.rotation-handle');
  if (!rotHandle) return;
  const tableId = wrapperEl.dataset.tableId;

  interact(rotHandle).draggable({
    inertia: false,
    listeners: {
      start(event) { event.stopPropagation(); },
      move(event) {
        event.stopPropagation();
        const table = getTableById(tableId);
        if (!table) return;

        const rect = wrapperEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        let angle = Math.atan2(event.client.y - centerY, event.client.x - centerX) * 180 / Math.PI + 90;
        angle = ((angle % 360) + 360) % 360;

        table.rotation = angle;
        wrapperEl.style.transform = `rotate(${angle}deg)`;
        wrapperEl.style.setProperty('--table-rot', `${angle}deg`);
      },
      end(event) {
        event.stopPropagation();
        const table = getTableById(tableId);
        if (!table) return;
        // Snap to nearest 45°
        table.rotation = Math.round(table.rotation / 45) * 45;
        wrapperEl.style.transform = `rotate(${table.rotation}deg)`;
        wrapperEl.style.setProperty('--table-rot', `${table.rotation}deg`);
        scheduleAutoSave();
      }
    }
  });
}

// Guest list as drop zone (unassign)
interact('#guest-list-container').dropzone({
  accept: '[data-type="seated"]',
  overlap: 0.05,
  listeners: {
    dragenter(event) { event.target.classList.add('list-drop-active'); },
    dragleave(event) { event.target.classList.remove('list-drop-active'); },
    drop(event) {
      event.target.classList.remove('list-drop-active');
      const guestId = dragState.guestId;
      if (!guestId) return;
      pushUndo();
      unassignGuest(guestId);
      dragState.dropped = true;
      renderAll();
    }
  }
});

// ══════════════════════════════════════════════════════════
//  MODAL — ADD / EDIT TABLE
// ══════════════════════════════════════════════════════════

function toggleEndsRow(shape) {
  const row = document.getElementById('modal-ends-row');
  if (shape === 'rect') {
    row.classList.remove('hidden');
  } else {
    row.classList.add('hidden');
  }
}

function openTableModal(tableId = null) {
  const overlay = document.getElementById('modal-overlay');
  overlay.dataset.editingId = tableId || '';

  if (tableId) {
    const tbl = getTableById(tableId);
    document.getElementById('modal-label').value = tbl.label;
    document.getElementById('modal-shape').value = tbl.shape;
    document.getElementById('modal-seats').value = tbl.seats.filter(s => !s.deleted).length;
    document.getElementById('modal-ends').checked = tbl.hasEnds || false;
    document.getElementById('modal-title').textContent = t('modalEditTitle');
    toggleEndsRow(tbl.shape);
    // Colour picker — pre-fill with custom or auto colour
    const autoColor = TABLE_COLORS[tbl.colorIndex % TABLE_COLORS.length];
    document.getElementById('modal-table-color').value = tbl.color || autoColor;
    document.getElementById('modal-color-auto').classList.toggle('active', !tbl.color);
    document.getElementById('modal-color-auto').dataset.isAuto = !tbl.color ? '1' : '';
    populateColorSwatches(tbl.color);
  } else {
    document.getElementById('modal-label').value = `Table ${state.nextTableId}`;
    document.getElementById('modal-shape').value = 'rect';
    document.getElementById('modal-seats').value = '8';
    document.getElementById('modal-ends').checked = false;
    document.getElementById('modal-title').textContent = t('modalAddTitle');
    toggleEndsRow('round');
    // Colour picker — default auto
    const autoColor = TABLE_COLORS[state.tables.length % TABLE_COLORS.length];
    document.getElementById('modal-table-color').value = autoColor;
    document.getElementById('modal-color-auto').classList.add('active');
    document.getElementById('modal-color-auto').dataset.isAuto = '1';
    populateColorSwatches(null);
  }

  overlay.classList.remove('hidden');
  document.getElementById('modal-label').focus();
  document.getElementById('modal-label').select();
}

function populateColorSwatches(selectedColor) {
  const container = document.getElementById('modal-color-swatches');
  container.innerHTML = '';
  TABLE_COLORS.forEach(c => {
    const sw = document.createElement('button');
    sw.type = 'button';
    sw.className = 'modal-color-swatch' + (selectedColor === c ? ' selected' : '');
    sw.style.background = c;
    sw.title = c;
    sw.addEventListener('click', () => {
      container.querySelectorAll('.modal-color-swatch').forEach(s => s.classList.remove('selected'));
      sw.classList.add('selected');
      document.getElementById('modal-table-color').value = c;
      document.getElementById('modal-color-auto').classList.remove('active');
      document.getElementById('modal-color-auto').dataset.isAuto = '';
    });
    container.appendChild(sw);
  });
}

function saveTableModal() {
  const tableId = document.getElementById('modal-overlay').dataset.editingId || null;
  const label = document.getElementById('modal-label').value.trim() || `Table ${state.nextTableId}`;
  const shape = document.getElementById('modal-shape').value;
  const maxSeats = Math.max(2, Math.min(48, parseInt(document.getElementById('modal-seats').value) || 8));
  const hasEnds = shape === 'rect' && document.getElementById('modal-ends').checked;
  const isAuto = document.getElementById('modal-color-auto').dataset.isAuto === '1';
  const tableColor = isAuto ? null : document.getElementById('modal-table-color').value;

  pushUndo();

  if (tableId) {
    const table = getTableById(tableId);
    table.label = label;
    table.shape = shape;
    table.hasEnds = hasEnds;
    table.color = tableColor;
    resizeSeats(table, maxSeats);
  } else {
    addTable(label, shape, maxSeats, hasEnds, tableColor);
  }

  closeModal();
  renderAll();
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
}

// ══════════════════════════════════════════════════════════
//  CONFIRM DIALOG
// ══════════════════════════════════════════════════════════

let confirmCallback = null;

function showConfirm(message, okLabel, callback) {
  document.getElementById('confirm-message').textContent = message;
  document.getElementById('confirm-ok').textContent = okLabel || t('confirmDelete');
  confirmCallback = callback;
  document.getElementById('confirm-overlay').classList.remove('hidden');
}

function confirmDeleteTable(tableId) {
  const table = getTableById(tableId);
  const occupiedCount = table.seats.filter(s => !s.deleted && s.guestId).length;
  const msg = t('confirmDeleteTable', table.label, occupiedCount);
  showConfirm(msg, t('confirmDelete'), () => {
    pushUndo();
    deleteTable(tableId);
    renderAll();
  });
}

// ══════════════════════════════════════════════════════════
//  GROUP POPOVER
// ══════════════════════════════════════════════════════════

let groupPopoverGuestId = null;

function openGroupPopover(guestId, anchorEl) {
  groupPopoverGuestId = guestId;
  const guest = getGuestById(guestId);
  const popover = document.getElementById('group-popover');
  const list = document.getElementById('group-popover-list');
  list.innerHTML = '';

  // "None" option
  const noneOpt = document.createElement('div');
  noneOpt.className = 'group-option none-option' + (!guest.groupId ? ' selected' : '');
  noneOpt.textContent = t('noGroup');
  noneOpt.addEventListener('click', () => {
    pushUndo();
    guest.groupId = null;
    closeGroupPopover();
    renderAll();
  });
  list.appendChild(noneOpt);

  // Existing groups
  for (const group of state.groups) {
    const opt = document.createElement('div');
    opt.className = 'group-option' + (guest.groupId === group.id ? ' selected' : '');
    const swatch = document.createElement('span');
    swatch.className = 'group-swatch';
    swatch.style.background = group.color;
    opt.appendChild(swatch);
    opt.appendChild(document.createTextNode(group.label));
    opt.addEventListener('click', () => {
      pushUndo();
      guest.groupId = group.id;
      closeGroupPopover();
      renderAll();
    });
    list.appendChild(opt);
  }

  // Position near anchor — reveal off-screen first to measure, then flip above if needed
  const rect = anchorEl.getBoundingClientRect();
  const leftPos = Math.min(rect.left, window.innerWidth - 260);
  popover.style.left = `${leftPos}px`;
  popover.style.top = '-9999px';
  popover.classList.remove('hidden');

  const ph = popover.offsetHeight;
  const spaceBelow = window.innerHeight - rect.bottom - 6;
  if (spaceBelow >= ph) {
    popover.style.top = `${rect.bottom + 6}px`;
  } else {
    // Not enough room below — open above the anchor instead
    popover.style.top = `${Math.max(6, rect.top - ph - 6)}px`;
  }
  document.getElementById('group-new-input').value = '';
  setTimeout(() => document.getElementById('group-new-input').focus(), 50);
}

function closeGroupPopover() {
  document.getElementById('group-popover').classList.add('hidden');
  groupPopoverGuestId = null;
}

// ══════════════════════════════════════════════════════════
//  CSV IMPORT
// ══════════════════════════════════════════════════════════

function handleCSVImport(file) {
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete(results) {
      const fields = results.meta.fields || [];
      const nameField = fields.find(f => /^name$/i.test(f.trim()))
                     || fields.find(f => /name/i.test(f))
                     || fields[0];

      if (!nameField) {
        Papa.parse(file, {
          header: false,
          skipEmptyLines: true,
          complete(r2) {
            pushUndo();
            let added = 0;
            for (const row of r2.data) {
              const name = (row[0] || '').trim();
              if (name && !state.guests.find(g => g.name === name)) {
                addGuest(name);
                added++;
              }
            }
            renderAll();
            toast(t('toastImported', added));
          }
        });
        return;
      }

      pushUndo();
      let added = 0;
      for (const row of results.data) {
        const name = (row[nameField] || '').trim();
        if (name && !state.guests.find(g => g.name === name)) {
          addGuest(name);
          added++;
        }
      }
      renderAll();
      toast(t('toastImported', added));
    },
    error(err) {
      alert(`CSV error: ${err.message}`);
    }
  });
}

// ══════════════════════════════════════════════════════════
//  EXPORT
// ══════════════════════════════════════════════════════════

function exportPlan() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `seating-plan-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast(t('toastPlanSaved'));
}

function importPlan(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const loaded = JSON.parse(e.target.result);
      if (!Array.isArray(loaded.guests) || !Array.isArray(loaded.tables)) {
        throw new Error('Invalid plan file');
      }
      pushUndo();
      Object.assign(state, loaded);
      normalizeState();
      renderAll();
      toast(t('toastPlanLoaded'));
    } catch(err) {
      alert(`Could not load plan: ${err.message}`);
    }
  };
  reader.readAsText(file);
}

function exportSeatingCSV() {
  const rows = [['Guest Name', 'Table', 'Seat #', 'Group']];
  for (const table of state.tables) {
    for (const seat of table.seats) {
      if (!seat.deleted && seat.guestId) {
        const guest = getGuestById(seat.guestId);
        if (guest) {
          const grp = getGuestGroup(guest);
          rows.push([guest.name, table.label, seat.seatIndex + 1, grp ? grp.label : '']);
        }
      }
    }
  }
  const seatedIds = getSeatedGuestIds();
  for (const guest of state.guests) {
    if (!seatedIds.has(guest.id)) {
      const grp = getGuestGroup(guest);
      rows.push([guest.name, 'Unassigned', '', grp ? grp.label : '']);
    }
  }
  const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `seating-assignments-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  toast(t('toastExported'));
}

// ══════════════════════════════════════════════════════════
//  AUTO-ASSIGN
// ══════════════════════════════════════════════════════════

function autoAssign() {
  const seatedIds = getSeatedGuestIds();
  const unassigned = state.guests.filter(g => !seatedIds.has(g.id));
  if (!unassigned.length) { toast(t('toastAutoAssignAll')); return; }

  const emptySeats = [];
  for (const table of state.tables)
    for (const seat of table.seats)
      if (!seat.deleted && !seat.guestId) emptySeats.push(seat);

  if (!emptySeats.length) { toast(t('toastNoSeats')); return; }

  const shuffled = [...unassigned];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  pushUndo();
  const toAssign = Math.min(shuffled.length, emptySeats.length);
  for (let i = 0; i < toAssign; i++) {
    emptySeats[i].guestId = shuffled[i].id;
  }
  renderAll();
  toast(t('toastAssigned', toAssign));
}

// ══════════════════════════════════════════════════════════
//  LOCAL STORAGE
// ══════════════════════════════════════════════════════════

const STORAGE_KEY = 'seating-planner-v1';
let saveTimer = null;

function scheduleAutoSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
  }, 800);
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (Array.isArray(saved.guests) && Array.isArray(saved.tables)) {
        Object.assign(state, saved);
        normalizeState();
      }
    }
  } catch(e) {}
}

// ══════════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════════

let toastTimer = null;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ══════════════════════════════════════════════════════════
//  EVENT LISTENERS
// ══════════════════════════════════════════════════════════

function attachListeners() {
  // Language toggle
  document.getElementById('btn-lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'sv' : 'en';
    applyTranslations();
  });

  // Add table
  document.getElementById('btn-add-table').addEventListener('click', () => openTableModal());

  // Add guests
  document.getElementById('btn-add-guests').addEventListener('click', () => {
    const raw = document.getElementById('guest-input').value;
    const names = raw.split('\n').map(n => n.trim()).filter(Boolean);
    if (!names.length) return;
    pushUndo();
    let added = 0;
    for (const name of names) {
      if (!state.guests.find(g => g.name === name)) { addGuest(name); added++; }
    }
    document.getElementById('guest-input').value = '';
    renderAll();
    if (added) toast(t('toastAdded', added));
  });

  document.getElementById('guest-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      document.getElementById('btn-add-guests').click();
    }
  });

  // Search
  document.getElementById('guest-search').addEventListener('input', () => renderGuestList());

  // CSV import
  document.getElementById('btn-import-csv').addEventListener('click', () => {
    document.getElementById('csv-file-input').click();
  });
  document.getElementById('csv-file-input').addEventListener('change', (e) => {
    if (e.target.files[0]) handleCSVImport(e.target.files[0]);
    e.target.value = '';
  });

  // Auto-assign
  document.getElementById('btn-auto-assign').addEventListener('click', autoAssign);

  // Undo
  document.getElementById('btn-undo').addEventListener('click', undo);

  // Save plan
  document.getElementById('btn-save-plan').addEventListener('click', exportPlan);

  // Load plan
  document.getElementById('btn-load-plan').addEventListener('click', () => {
    document.getElementById('plan-file-input').click();
  });
  document.getElementById('plan-file-input').addEventListener('change', (e) => {
    if (e.target.files[0]) importPlan(e.target.files[0]);
    e.target.value = '';
  });

  // Export CSV
  document.getElementById('btn-export-csv').addEventListener('click', exportSeatingCSV);

  // Print — auto-switches to print-mode for clean output, restores afterward
  document.getElementById('btn-print').addEventListener('click', () => {
    const wasPrintMode = document.body.classList.contains('print-mode');
    if (!wasPrintMode) {
      document.body.classList.add('print-mode');
      document.getElementById('btn-mode-print').classList.add('active');
      document.getElementById('btn-mode-plan').classList.remove('active');
      applyPrintSettings();
    }
    // Give the browser one frame to apply CSS before opening the dialog
    requestAnimationFrame(() => {
      window.print();
      if (!wasPrintMode) {
        document.body.classList.remove('print-mode');
        document.getElementById('btn-mode-plan').classList.add('active');
        document.getElementById('btn-mode-print').classList.remove('active');
        applyPrintSettings();
      }
    });
  });

  // Plan / Print mode toggle
  document.getElementById('btn-mode-plan').addEventListener('click', () => {
    document.body.classList.remove('print-mode');
    document.getElementById('btn-mode-plan').classList.add('active');
    document.getElementById('btn-mode-print').classList.remove('active');
    applyPrintSettings(); // clears any inline bg styles when leaving print mode
  });
  document.getElementById('btn-mode-print').addEventListener('click', () => {
    document.body.classList.add('print-mode');
    document.getElementById('btn-mode-print').classList.add('active');
    document.getElementById('btn-mode-plan').classList.remove('active');
    applyPrintSettings();
  });

  // ── Print panel controls ────────────────────────────────────
  const ps = () => state.printSettings;

  // Paper size + orientation
  document.getElementById('pp-paper-size').addEventListener('change', (e) => {
    ps().paperSize = e.target.value; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-portrait').addEventListener('click', () => {
    ps().paperOrientation = 'portrait'; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-landscape').addEventListener('click', () => {
    ps().paperOrientation = 'landscape'; applyPrintSettings(); scheduleAutoSave();
  });

  // Visibility
  document.getElementById('pp-show-names').addEventListener('change', (e) => {
    ps().showNames = e.target.checked; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-show-labels').addEventListener('change', (e) => {
    ps().showTableLabels = e.target.checked; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-show-groups').addEventListener('change', (e) => {
    ps().showGroupColors = e.target.checked; applyPrintSettings(); scheduleAutoSave();
  });

  // Name style
  document.getElementById('pp-names-font').addEventListener('change', (e) => {
    ps().namesFontFamily = e.target.value; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-names-size').addEventListener('input', (e) => {
    ps().namesFontSize = parseInt(e.target.value) || 10; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-names-bold').addEventListener('click', () => {
    ps().namesBold = !ps().namesBold; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-names-italic').addEventListener('click', () => {
    ps().namesItalic = !ps().namesItalic; applyPrintSettings(); scheduleAutoSave();
  });

  // Table label style
  document.getElementById('pp-labels-font').addEventListener('change', (e) => {
    ps().tableLabelFontFamily = e.target.value; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-labels-size').addEventListener('input', (e) => {
    ps().tableLabelFontSize = parseInt(e.target.value) || 12; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-labels-bold').addEventListener('click', () => {
    ps().tableLabelBold = !ps().tableLabelBold; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-labels-italic').addEventListener('click', () => {
    ps().tableLabelItalic = !ps().tableLabelItalic; applyPrintSettings(); scheduleAutoSave();
  });

  // Background
  document.querySelectorAll('input[name="pp-bg"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      ps().bgType = e.target.value;
      if (e.target.value === 'image') document.getElementById('pp-bg-file').click();
      applyPrintSettings(); scheduleAutoSave();
    });
  });
  document.getElementById('pp-bg-color').addEventListener('input', (e) => {
    ps().bgColor = e.target.value; applyPrintSettings(); scheduleAutoSave();
  });
  document.getElementById('pp-bg-upload-btn').addEventListener('click', () => {
    document.getElementById('pp-bg-file').click();
  });
  document.getElementById('pp-bg-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      ps().bgImage = ev.target.result;
      ps().bgType  = 'image';
      document.querySelector('input[name="pp-bg"][value="image"]').checked = true;
      applyPrintSettings(); scheduleAutoSave();
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  });

  // Add text box
  document.getElementById('btn-add-textbox').addEventListener('click', () => {
    const ca = document.getElementById('canvas-area');
    const tb = {
      id: 'tb_' + Date.now(),
      x: Math.round(ca.scrollLeft + ca.clientWidth  / 2 - 90),
      y: Math.round(ca.scrollTop  + ca.clientHeight / 2 - 24),
      text: 'Text',
      fontFamily: '', fontSize: 18, bold: false, italic: false, color: '#333333',
      w: null, h: null,  // null = auto-size until first resize
    };
    pushUndo();
    state.textBoxes.push(tb);
    renderTextBoxes();
    scheduleAutoSave();
    // Focus the new text box
    const newEl = document.querySelector(`[data-tb-id="${tb.id}"] .text-box-content`);
    if (newEl) { newEl.focus(); document.execCommand('selectAll'); }
  });

  // Clear tables (keeps guests)
  document.getElementById('btn-clear-tables').addEventListener('click', () => {
    showConfirm(t('confirmClearTablesMsg'), t('confirmClearTables'), () => {
      pushUndo();
      state.tables = [];
      renderAll();
      toast(t('toastTablesCleared'));
    });
  });

  // Clear guest list (keeps tables, unassigns all seats)
  document.getElementById('btn-clear-guests').addEventListener('click', () => {
    showConfirm(t('confirmClearGuestsMsg'), t('confirmClearGuests'), () => {
      pushUndo();
      state.guests = [];
      state.groups = [];
      for (const table of state.tables)
        for (const seat of table.seats)
          seat.guestId = null;
      renderAll();
      toast(t('toastGuestsCleared'));
    });
  });

  // Modal
  document.getElementById('modal-shape').addEventListener('change', (e) => toggleEndsRow(e.target.value));
  document.getElementById('modal-save').addEventListener('click', saveTableModal);
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  // Table color picker: custom color input deactivates Auto
  document.getElementById('modal-table-color').addEventListener('input', () => {
    document.getElementById('modal-color-auto').classList.remove('active');
    document.getElementById('modal-color-auto').dataset.isAuto = '';
    document.getElementById('modal-color-swatches').querySelectorAll('.modal-color-swatch').forEach(s => s.classList.remove('selected'));
  });
  // Auto button: resets to auto color
  document.getElementById('modal-color-auto').addEventListener('click', () => {
    const tableId = document.getElementById('modal-overlay').dataset.editingId || null;
    const autoColor = tableId
      ? TABLE_COLORS[getTableById(tableId).colorIndex % TABLE_COLORS.length]
      : TABLE_COLORS[state.tables.length % TABLE_COLORS.length];
    document.getElementById('modal-table-color').value = autoColor;
    document.getElementById('modal-color-auto').classList.add('active');
    document.getElementById('modal-color-auto').dataset.isAuto = '1';
    document.getElementById('modal-color-swatches').querySelectorAll('.modal-color-swatch').forEach(s => s.classList.remove('selected'));
  });
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.getElementById('modal-seats').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveTableModal();
  });
  document.getElementById('modal-label').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') saveTableModal();
  });

  // Confirm dialog
  document.getElementById('confirm-ok').addEventListener('click', () => {
    document.getElementById('confirm-overlay').classList.add('hidden');
    if (confirmCallback) { confirmCallback(); confirmCallback = null; }
  });
  document.getElementById('confirm-cancel').addEventListener('click', () => {
    document.getElementById('confirm-overlay').classList.add('hidden');
    confirmCallback = null;
  });

  // Group popover — new group
  document.getElementById('group-new-btn').addEventListener('click', () => {
    const name = document.getElementById('group-new-input').value.trim();
    if (!name) return;
    pushUndo();
    const group = addGroup(name);
    if (groupPopoverGuestId) {
      const guest = getGuestById(groupPopoverGuestId);
      if (guest) guest.groupId = group.id;
    }
    closeGroupPopover();
    renderAll();
  });

  document.getElementById('group-new-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('group-new-btn').click();
    if (e.key === 'Escape') closeGroupPopover();
  });

  // Close group popover on outside click
  document.addEventListener('click', (e) => {
    const popover = document.getElementById('group-popover');
    if (!popover.classList.contains('hidden') &&
        !popover.contains(e.target) &&
        !e.target.classList.contains('group-dot')) {
      closeGroupPopover();
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    const meta = e.metaKey || e.ctrlKey;
    if (meta && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
    if (e.key === 'Escape') {
      closeModal();
      closeGroupPopover();
      document.getElementById('confirm-overlay').classList.add('hidden');
    }
  });

  // Ctrl+scroll to zoom
  document.getElementById('canvas-area').addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      applyZoom(zoomLevel + (e.deltaY < 0 ? 0.1 : -0.1));
    }
  }, { passive: false });

  // Zoom controls
  document.getElementById('btn-zoom-out').addEventListener('click', () => applyZoom(zoomLevel - 0.1));
  document.getElementById('btn-zoom-in').addEventListener('click',  () => applyZoom(zoomLevel + 0.1));
  document.getElementById('zoom-label').addEventListener('click',   () => applyZoom(1));

  // Table size controls
  document.getElementById('btn-table-shrink').addEventListener('click', () => {
    state.tableSizeScale = Math.max(0.5, Math.round((state.tableSizeScale || 1) * 10 - 1) / 10);
    renderAll();
    updateSizeLabel();
  });
  document.getElementById('btn-table-grow').addEventListener('click', () => {
    state.tableSizeScale = Math.min(2, Math.round((state.tableSizeScale || 1) * 10 + 1) / 10);
    renderAll();
    updateSizeLabel();
  });
  document.getElementById('size-label').addEventListener('click', () => {
    state.tableSizeScale = 1;
    renderAll();
    updateSizeLabel();
  });
}

// ══════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  attachListeners();
  applyTranslations(); // sets all static text and calls renderAll()
  applyZoom(zoomLevel);
});
