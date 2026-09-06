// Internal IDs preserve the existing candidate/document model; they are not Excel column numbers.
const FINISZ_FIELDS = [
    {"id": 0, "header": "LP", "label": "LP", "hidden": true},
    {"id": 1, "header": "PROJEKT", "label": "PROJEKT"},
    {"id": 2, "header": "Nr produkcyjny pracownika ", "label": "Nr produkcyjny pracownika", "hidden": true},
    {"id": 3, "header": "ПРІЗВИЩЕ\n \n NAZWISKO", "label": "NAZWISKO", "source": ["Прізвище"], "required": true},
    {"id": 4, "header": "ІМ'Я\n \n IMIĘ", "label": "IMIĘ", "source": ["Ім'я"], "required": true},
    {"id": 5, "header": "Дата народження\n \n Data urodzenia", "label": "Data urodzenia", "source": ["Дата народження"], "required": true, "date": true},
    {"id": 6, "header": "Місце народження                                    Miejsce urodzenia", "label": "Miejsce urodzenia", "source": ["Країна, місто народження"], "required": true},
    {"id": 7, "header": "Номер закордонного паспорта\n \n Seria I numer paszportu", "label": "Seria i numer paszportu", "source": ["Номер закордонного паспорту", "Номер закордонного паспорта"], "required": true},
    {"id": 8, "header": "Дата видачі паспорту               Data wydania paszportu", "label": "Data wydania paszportu", "source": ["Дата видачи паспорту", "Дата видачі паспорту"], "required": true, "date": true},
    {"id": 9, "header": "Дата закінчення паспорту\n \n Data ważności do ", "label": "Data ważności do", "source": ["Дійсний до"], "required": true, "date": true},
    {"id": 10, "header": "Громадянство\n Obywatelstwo", "label": "Obywatelstwo", "source": ["Громадянство"], "required": true},
    {"id": 11, "header": "Країна                              Kraj ", "label": "Kraj", "source": ["Країна"], "required": true},
    {"id": 12, "header": "Стать кандидата   Płeć (K/M)", "label": "Płeć (K/M)", "source": ["Стать"], "required": true},
    {"id": 13, "header": "PARA/RODZINA/KOLEGI", "label": "PARA/RODZINA/KOLEGI"},
    {"id": 14, "header": "ADRES MAILOWY/АДРЕСА ЕЛЕКТРОННОЇ ПОШТИ", "label": "ADRES MAILOWY", "hidden": true},
    {"id": 15, "header": "Hasło do poczty email", "label": "Hasło do poczty email", "hidden": true},
    {"id": 16, "header": "Номер банківського рахунку (польський)                                                              Konto bankowe", "label": "Konto bankowe"},
    {"id": 17, "header": "Pesel", "label": "Pesel", "source": ["Номер PESEL"], "required": true},
    {"id": 18, "header": "NIP", "label": "NIP", "hidden": true},
    {"id": 19, "header": "Sposób zatrudnienia", "label": "Sposób zatrudnienia", "hidden": true},
    {"id": 20, "header": "Наявність карти поляка\n \n Karta Polaka", "label": "Karta Polaka", "source": ["Наявність Kарти поляка", "Наявність Карти поляка"], "required": true},
    {"id": 21, "header": "PASZPORT BIOMETRYCZNY", "label": "PASZPORT BIOMETRYCZNY", "source": ["Наявність біометричного паспорту"], "required": true},
    {"id": 22, "header": "Номер візи\n \n Numer wizy", "label": "Numer wizy", "source": ["Номер візи"]},
    {"id": 23, "header": "Місто в якому видана віза\n \n Wiza wydana w", "label": "Wiza wydana w", "source": ["Місто в якому була видана віза"]},
    {"id": 24, "header": "Термін дії візи ВІД\n \n Data wazności od (wiza)", "label": "Data wazności od (wiza)", "source": ["Термін дії візи Від"], "date": true},
    {"id": 25, "header": "Термін дії візи ДО\n \n Data wazności do (wiza)", "label": "Data wazności do (wiza)", "source": ["Термін дії візи До"], "date": true},
    {"id": 46, "header": "Data przyjazdu do RP", "label": "Data przyjazdu do RP", "source": ["Фактична дата в'їзду із України в Польщу"], "date": true},
    {"id": 26, "header": "Область\n \n Województwo", "label": "Województwo", "source": ["Область"], "required": true},
    {"id": 27, "header": "Район/Gmina", "label": "Район/Gmina", "source": ["Район"], "required": true},
    {"id": 28, "header": "НАСЕЛЕНИЙ ПУНКТ (ДЕ ПРОПИСАНИЙ)\n \n MIEJSCOWOŚĆ", "label": "MIEJSCOWOŚĆ", "source": ["Населений пункт"], "required": true},
    {"id": 29, "header": "Вулиця, номер буднку/квартири\n \n Ulica/numer domu/lokalu", "label": "Ulica/numer domu/lokalu", "source": ["Вулиця номер будинку / квартири"], "required": true},
    {"id": 30, "header": "Індекс\n \n Kod pocztowy", "label": "Kod pocztowy", "source": ["Індекс"], "required": true},
    {"id": 31, "header": "ІМ'Я БАТЬКА\n \n IMIĘ OJCA", "label": "IMIĘ OJCA", "source": ["Ім'я батька"], "required": true},
    {"id": 32, "header": "ІМ'Я МАТЕРІ\n \n IMIĘ MATKI", "label": "IMIĘ MATKI", "source": ["Ім'я матері"], "required": true},
    {"id": 33, "header": "Numer Viber", "label": "Numer Viber", "source": ["Номер Viber (380985436754)", "Номер Viber"], "required": true},
    {"id": 34, "header": "Номер телефону\n \n Numer telefonu UA", "label": "Numer telefonu UA", "source": ["Номер телефону в Україні (380985436754)", "Номер телефону в Україні"], "required": true},
    {"id": 35, "header": "Розмір взуття\n \n Rozmiar buta", "label": "Rozmiar buta", "source": ["Розмір взуття"], "required": true},
    {"id": 36, "header": "Об'єм талії (см)\n \n Rozmiar spodni/kombinezonu", "label": "Rozmiar spodni/kombinezonu", "source": ["Об'єм талії (см)"], "required": true},
    {"id": 37, "header": "Розмір футболки\n (S/M/L/XL/XXL)\n \n Rozmiar koszulki", "label": "Rozmiar koszulki", "source": ["Розмір футболки"], "required": true},
    {"id": 38, "header": "Зріст  WZROST (cm)", "label": "WZROST (cm)", "source": ["Зріст (см)"], "required": true},
    {"id": 39, "header": "Uwagi", "label": "Uwagi", "hidden": true},
    {"id": 40, "header": "Nr telefonu PL", "label": "Nr telefonu PL", "source": ["Номер телефону в Польщі (543675098)", "Номер телефону в Польщі"]},
    {"id": 41, "header": "Прізвище при народженні        Nazwisko rodowe:", "label": "Nazwisko rodowe", "source": ["Прізвище при народженні"], "required": true},
    {"id": 42, "header": "Nazwisko rodowe matki:", "label": "Nazwisko rodowe matki", "source": ["Дівоче прізвище матері"], "required": true},
    {"id": 43, "header": "Wystawca paszportu:", "label": "Wystawca paszportu", "source": ["Установа що видала закордонний паспорт"], "required": true},
    {"id": 44, "header": "TIN „UKRAIŃSKI PESEL”", "label": "TIN „UKRAIŃSKI PESEL”", "source": ["IПН (Ідентифікаційний код)", "ІПН (Ідентифікаційний код)"]},
    {"id": 45, "header": "Електронна пошта               Adres email prywatny", "label": "Adres email prywatny", "source": ["E-Mail"], "required": true},
    {"id": 47, "header": "Czy kandydat chcę kwaterę \"premium\"?\n1 – TAK\n2 – NIE", "label": "Czy kandydat chcę kwaterę \"premium\"?", "required": true, "derived": true},
    {"id": 48, "header": "Własne mieszkanie\n1 – TAK\n2 – NIE", "label": "Własne mieszkanie", "source": ["Чи забезпечені ви житлом за місцем праці?"], "required": true},
    {"id": 49, "header": "Wjazd z Ukrainy do RP po 24.02.2022\n1 – TAK\n2 – NIE", "label": "Wjazd z Ukrainy do RP po 24.02.2022", "required": true, "derived": true},
    {"id": 50, "header": "Gdzie przebywa osoba*:\n1 – W Polsce\n2 – Poza granicami UE", "label": "Gdzie przebywa osoba", "required": true, "derived": true},
    {"id": 51, "header": "Zgoda na e-dokumenty", "label": "Zgoda na e-dokumenty", "derived": true}
];

const Finisz = (() => {
    const fields = FINISZ_FIELDS;
    const byId = Object.fromEntries(fields.map(f => [f.id, f]));
    const dateIds = fields.filter(f => f.date).map(f => f.id);
    const normalizeHeader = value => String(value ?? '').normalize('NFKC').toLowerCase()
        .replace(/[’`ʼ]/g, "'").replace(/\(\s*\d[\d\s]*\)/g, '')
        .replace(/\s+/g, ' ').trim().replace(/[:\s]+$/g, '');

    function calendarDate(year, month, day) {
        const d = new Date(0);
        d.setUTCHours(0, 0, 0, 0);
        d.setUTCFullYear(year, month - 1, day);
        return year >= 1800 && year <= 9999 && d.getUTCFullYear() === year &&
            d.getUTCMonth() === month - 1 && d.getUTCDate() === day ? d : null;
    }
    function parseDate(value) {
        if (value instanceof Date) return Number.isFinite(value.getTime()) ?
            calendarDate(value.getUTCFullYear(), value.getUTCMonth() + 1, value.getUTCDate()) : null;
        const s = String(value ?? '').trim();
        let m = s.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
        if (m) return calendarDate(+m[1], +m[2], +m[3]);
        m = s.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
        return m ? calendarDate(+m[3], +m[2], +m[1]) : null;
    }
    const formatDate = d => d ? `${String(d.getUTCDate()).padStart(2,'0')}.${String(d.getUTCMonth()+1).padStart(2,'0')}.${d.getUTCFullYear()}` : '';
    function excelDate(serial, date1904) {
        if (!Number.isFinite(serial) || serial < 0 || (!date1904 && Math.floor(serial) === 60)) return null;
        const parsed = XLSX.SSF.parse_date_code(serial, { date1904: !!date1904 });
        return parsed ? calendarDate(parsed.y, parsed.m, parsed.d) : null;
    }
    function readCell(cell, field, date1904) {
        if (!cell || cell.v == null) return { value: '', original: '' };
        if (cell.t === 'e') return { value: String(cell.w || '#ERROR!'), original: String(cell.w || '#ERROR!'), error: 'Błąd komórki Excel' };
        const original = cell.v instanceof Date ? cell.v.toISOString() : String(cell.v);
        if (field.date && (cell.t === 'n' || cell.t === 'd')) {
            const date = cell.t === 'n' ? excelDate(cell.v, date1904) : parseDate(cell.v);
            return { value: date ? formatDate(date) : original, original, error: date ? '' : 'Nieprawidłowa data Excel' };
        }
        if (cell.t === 'n') {
            // Identifiers use raw integer digits, never Excel's scientific display.
            const digits = Number.isInteger(cell.v) ? cell.v.toLocaleString('en-US', { useGrouping: false, maximumFractionDigits: 0 }) : String(cell.v);
            const format = String(cell.z || '').split(';')[0];
            const value = /^0+$/.test(format) ? digits.padStart(format.length, '0') : digits;
            const identifier = [7,17,30,33,34,40,43,44].includes(field.id);
            return { value, original: value, error: identifier && (!Number.isSafeInteger(cell.v) || Math.abs(cell.v) >= 1e15) ? 'Excel: numer zapisany liczbowo może mieć utracone cyfry — sprawdź źródło' : '' };
        }
        return { value: original, original };
    }
    function readQuestionnaire(workbook) {
        for (const name of workbook.SheetNames) {
            const sheet = workbook.Sheets[name];
            if (!sheet['!ref']) continue;
            const range = XLSX.utils.decode_range(sheet['!ref']);
            for (let row = range.s.r; row <= Math.min(range.e.r, range.s.r + 20); row++) {
                const headers = new Map();
                for (let col = range.s.c; col <= range.e.c; col++) {
                    const key = normalizeHeader(sheet[XLSX.utils.encode_cell({ r: row, c: col })]?.v);
                    if (key) headers.set(key, [...(headers.get(key) || []), col]);
                }
                const columns = new Map();
                for (const field of fields.filter(f => f.source)) {
                    const matches = [...new Set(field.source.flatMap(s => headers.get(normalizeHeader(s)) || []))];
                    if (matches.length > 1) throw new Error(`Powtórzona kolumna ankiety: ${field.label}`);
                    if (matches.length) columns.set(field.id, matches[0]);
                }
                if (!columns.has(3) || !columns.has(4)) continue;
                const candidates = [];
                for (let r = row + 1; r <= range.e.r; r++) {
                    const data = new Array(52).fill(''), originalValues = {}, importErrors = {};
                    for (const [id, col] of columns) {
                        const value = readCell(sheet[XLSX.utils.encode_cell({ r, c: col })], byId[id], workbook.Workbook?.WBProps?.date1904);
                        data[id] = value.value;
                        originalValues[id] = value.original;
                        if (value.error) importErrors[id] = value.error;
                    }
                    // Retain partially completed candidates even when both names are missing.
                    if (Object.values(originalValues).some(v => String(v).trim())) candidates.push({ data, originalValues, importErrors, name: `${data[3]} ${data[4]}`.trim() || `Wiersz ${r+1}` });
                }
                return candidates;
            }
        }
        throw new Error('Nie znaleziono nagłówków ankiety: Прізвище / Ім\'я.');
    }
    function yesNo(value, numeric = false) {
        const s = String(value ?? '').trim().toUpperCase();
        if (['1','TAK','YES','ТАК','ДА'].includes(s)) return numeric ? '1' : 'TAK';
        if (['2','NIE','NO','НІ','НЕТ'].includes(s)) return numeric ? '2' : 'NIE';
        return s;
    }
    function phone(value, country) {
        let s = String(value).trim().replace(/[\s()\-–]/g, '');
        if (!/^\+?\d+$/.test(s)) return s;
        if (s.startsWith('00')) s = '+' + s.slice(2);
        if (country === 'PL') {
            if (/^\d{9}$/.test(s)) return '+48' + s;
            if (/^48\d{9}$/.test(s)) return '+' + s;
        }
        if (country === 'UA') {
            if (/^0\d{9}$/.test(s)) return '+38' + s;
            if (/^380\d{9}$/.test(s)) return '+' + s;
        }
        if (!country && /^(380\d{9}|48\d{9})$/.test(s)) return '+' + s;
        return s;
    }
    function normalizeValue(id, value) {
        let s = String(value ?? '').trim().replace(/\s+/g, ' ');
        if (id === 45) return s.replace(/\s*@\s*/g, '@').toLowerCase();
        s = s.toUpperCase();
        if (id === 7) return s.replace(/\s/g, '');
        if (id === 17) return s.replace(/[\s.\-]/g, '');
        if (dateIds.includes(id)) return formatDate(parseDate(s)) || s;
        if (id === 20 || id === 21) return yesNo(s);
        if (id === 48) return yesNo(s, true);
        if ([33,34,40].includes(id)) return phone(s, id === 34 ? 'UA' : id === 40 ? 'PL' : '');
        if (id === 29) {
            if (s.includes(',')) return s.split(',').map(x => x.trim()).join(', ');
            const parts = s.split(/\s+/);
            if (parts.length >= 2 && /^\d/.test(parts[parts.length-1])) return `${parts.slice(0,-1).join(' ')}, ${parts[parts.length-1]}`;
        }
        // Keep the existing ZenFinish postcode presentation rule.
        if (id === 30 && /^\d{2}[\s-]?\d{3}$/.test(s)) {
            const digits = s.replace(/[\s-]/g, '');
            return digits.slice(0,2) + '-' + digits.slice(2);
        }
        return s;
    }
    function derive(data) {
        const entry = parseDate(data[46]);
        data[47] = '1';
        data[49] = entry && entry > calendarDate(2022,2,24) ? '1' : '2';
        data[50] = entry ? '1' : '2';
        data[51] = 'TAK';
    }
    function emailError(s) {
        if (s.includes('..')) return 'E-mail: podwójna kropka';
        const parts = s.split('@');
        if (parts.length !== 2 || !parts[0] || !parts[1] || /\s/.test(s)) return 'E-mail: nieprawidłowy format';
        if (!/^[^<>(),;:\\"\[\]@]+$/.test(parts[0]) || /^\.|\.$/.test(parts[0])) return 'E-mail: nieprawidłowa część przed @';
        const labels = parts[1].split('.');
        if (labels.length < 2 || labels.some(l => !/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(l)) || !/^[a-z]{2,63}$/i.test(labels.at(-1))) return 'E-mail: nieprawidłowa domena';
        return '';
    }
    // Official checksum, century encoding and sex parity:
    // https://www.gov.pl/web/gov/czym-jest-numer-pesel
    function peselInfo(value) {
        if (!/^\d{11}$/.test(value)) return { error: 'PESEL: wymagane 11 cyfr' };
        const sum = [1,3,7,9,1,3,7,9,1,3].reduce((s,w,i) => s + w * Number(value[i]), 0);
        if ((10 - sum % 10) % 10 !== Number(value[10])) return { error: 'PESEL: nieprawidłowa suma kontrolna' };
        const monthCode = Number(value.slice(2,4));
        const century = [1900,2000,2100,2200,1800][Math.floor(monthCode / 20)];
        const dob = calendarDate(century + Number(value.slice(0,2)), monthCode % 20, Number(value.slice(4,6)));
        if (!dob) return { error: 'PESEL: nieprawidłowa zakodowana data urodzenia' };
        return { dob, sex: Number(value[9]) % 2 ? 'M' : 'K' };
    }
    function validate(row, now = new Date()) {
        const d = row.data, errors = [], missing = [], invalid = new Set();
        const today = calendarDate(now.getFullYear(), now.getMonth()+1, now.getDate());
        const add = (ids, reason) => { ids.forEach(id => invalid.add(id)); errors.push({ ids, reason }); };
        for (const f of fields) {
            if (f.required && !d[f.id]) { missing.push(f.id); invalid.add(f.id); }
            if (row.importErrors?.[f.id]) add([f.id], `${f.label}: ${row.importErrors[f.id]}`);
        }
        const dates = Object.fromEntries(dateIds.map(id => [id, parseDate(d[id])]));
        for (const id of dateIds) if (d[id] && !dates[id]) add([id], `${byId[id].label}: nieprawidłowa data`);
        if (dates[5] > today) add([5], 'Data urodzenia: data w przyszłości');
        if (d[17]) {
            const info = peselInfo(d[17]);
            if (info.error) add([17], info.error);
            else {
                if (info.dob > today) add([17], 'PESEL: data urodzenia w przyszłości');
                if (dates[5] && +info.dob !== +dates[5]) add([17,5], 'PESEL: data urodzenia w PESEL nie zgadza się z datą urodzenia z ankiety');
                if (['K','M'].includes(d[12]) && info.sex !== d[12]) add([17,12], 'PESEL: płeć niezgodna z ankietą');
            }
        }
        if (d[12] && !['K','M'].includes(d[12])) add([12], 'Płeć: wymagane K lub M');
        const ukrainian = /UKRA|УКРА/.test(d[10]);
        if (d[7] && ukrainian && !/^[A-Z]{2}\d{6}$/.test(d[7])) add([7], 'Paszport: nieprawidłowy format (2 litery łacińskie i 6 cyfr)');
        if (dates[8] > today) add([8], 'Paszport: data wydania w przyszłości');
        if (dates[8] && dates[9] && dates[9] <= dates[8]) add([8,9], 'Paszport: ważność musi kończyć się po dacie wydania');
        if (dates[9] && dates[9] < today) add([9], 'Paszport: dokument utracił ważność');
        if (dates[8] && dates[9] && ukrainian && (dates[9] - dates[8]) / 86400000 > 3660) add([8,9], 'Paszport: nietypowy okres ważności — sprawdź dokument');
        if (dates[24] && dates[25] && dates[25] < dates[24]) add([24,25], 'Wiza: data końcowa wcześniejsza niż początkowa');
        if (dates[46] > today) add([46], 'Data przyjazdu do RP: faktyczny wjazd nie może być w przyszłości');
        for (const id of [20,21,48]) if (d[id] && !(id === 48 ? ['1','2'] : ['TAK','NIE']).includes(d[id])) add([id], `${byId[id].label}: nierozpoznana odpowiedź TAK/NIE`);
        for (const [id,pattern,label] of [[40,/^\+48\d{9}$/,'Telefon PL'],[34,/^\+380\d{9}$/,'Telefon UA'],[33,/^\+?[1-9]\d{6,14}$/,'Viber']]) {
            if (d[id] && !pattern.test(d[id])) add([id], `${label}: nieprawidłowy format lub liczba cyfr`);
        }
        if (d[30] && !/^\d{2}-\d{3}$/.test(d[30])) add([30], 'Kod pocztowy: wymagane 5 cyfr');
        if (d[45] && emailError(d[45])) add([45], emailError(d[45]));
        const visa = [22,23,24,25], filled = visa.filter(id => d[id]);
        if (filled.length && filled.length < 4) {
            visa.filter(id => !d[id]).forEach(id => { missing.push(id); invalid.add(id); });
            add(visa, 'Wiza: niepełne dane wizowe');
        }
        row.invalid = invalid;
        return { errors, missing, invalid };
    }
    function destinationColumns(headers) {
        const normalized = headers.map(normalizeHeader);
        return new Map(fields.map(f => {
            const matches = normalized.flatMap((h,i) => h === normalizeHeader(f.header) ? [i] : []);
            if (matches.length !== 1) throw new Error(`Szablon FINISZ: brak lub powtórzony nagłówek ${f.label}`);
            return [f.id, matches[0]];
        }));
    }
    async function exportTemplate(buffer, rows) {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheet = workbook.Sheets.FINISH;
        if (!sheet) throw new Error('Szablon FINISZ: brak arkusza FINISH');
        const range = XLSX.utils.decode_range(sheet['!ref']);
        const headers = Array.from({ length: range.e.c+1 }, (_,c) => sheet[XLSX.utils.encode_cell({r:0,c})]?.v || '');
        const columns = destinationColumns(headers);
        const zip = await JSZip.loadAsync(buffer);
        const parser = new DOMParser(), serializer = new XMLSerializer();
        const parse = xml => {
            const doc = parser.parseFromString(xml, 'application/xml');
            if (doc.getElementsByTagName('parsererror').length) throw new Error('Nieprawidłowy XML szablonu FINISZ');
            return doc;
        };
        const wbDoc = parse(await zip.file('xl/workbook.xml').async('string'));
        const relDoc = parse(await zip.file('xl/_rels/workbook.xml.rels').async('string'));
        const sheetNode = [...wbDoc.getElementsByTagNameNS('*','sheet')].find(s => s.getAttribute('name') === 'FINISH');
        const relId = sheetNode.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships','id');
        const target = [...relDoc.getElementsByTagNameNS('*','Relationship')].find(r => r.getAttribute('Id') === relId)?.getAttribute('Target');
        if (!target) throw new Error('Brak relacji arkusza FINISH');
        const path = target.startsWith('/') ? target.slice(1) : 'xl/' + target.replace(/^\.\//,'');
        const xml = await zip.file(path).async('string'), doc = parse(xml);
        const ns = doc.documentElement.namespaceURI;
        const sheetData = doc.getElementsByTagNameNS(ns,'sheetData')[0];
        const templateRows = [...sheetData.children];
        const rowMap = new Map(templateRows.map(r => [Number(r.getAttribute('r')), r]));
        const templateRow = rowMap.get(2);
        const columnLetters = new Set([...columns.values()].map(c => XLSX.utils.encode_col(c)));
        // Clear only mapped template placeholders, retaining cell styles and every technical column.
        for (const row of templateRows) {
            if (Number(row.getAttribute('r')) < 2) continue;
            for (const cell of row.children) if (columnLetters.has(cell.getAttribute('r').replace(/\d/g,''))) {
                cell.replaceChildren(); cell.removeAttribute('t');
            }
        }
        rows.forEach((candidate,i) => {
            const rowNumber = i + 2;
            let row = rowMap.get(rowNumber);
            if (!row) {
                row = templateRow ? templateRow.cloneNode(true) : doc.createElementNS(ns,'row');
                row.setAttribute('r', rowNumber);
                for (const cell of row.children) {
                    cell.setAttribute('r', cell.getAttribute('r').replace(/\d+$/, rowNumber));
                    cell.replaceChildren(); cell.removeAttribute('t');
                }
                sheetData.appendChild(row);
            }
            const cells = new Map([...row.children].map(c => [c.getAttribute('r'), c]));
            for (const [id,col] of columns) {
                const value = candidate.data[id];
                if (value == null || value === '') continue;
                const ref = XLSX.utils.encode_col(col) + rowNumber;
                let cell = cells.get(ref);
                if (!cell) {
                    cell = doc.createElementNS(ns,'c'); cell.setAttribute('r', ref);
                    const next = [...row.children].find(c => XLSX.utils.decode_cell(c.getAttribute('r')).c > col);
                    row.insertBefore(cell, next || null);
                }
                cell.replaceChildren(); cell.setAttribute('t', 'inlineStr');
                const inline = doc.createElementNS(ns,'is'), text = doc.createElementNS(ns,'t');
                text.setAttributeNS('http://www.w3.org/XML/1998/namespace','xml:space','preserve');
                text.textContent = String(value); inline.appendChild(text); cell.appendChild(inline);
            }
        });
        if (rows.length + 1 > range.e.r + 1) {
            const dim = doc.getElementsByTagNameNS(ns,'dimension')[0];
            if (dim) dim.setAttribute('ref', `A1:${XLSX.utils.encode_col(range.e.c)}${rows.length+1}`);
        }
        // Other XML parts, validation extensions, headers and workbook assets stay untouched.
        // Replace only sheetData (and the dimension when expanded), not the entire XML document.
        let outputXml = xml.replace(/<sheetData(?:\s[^>]*)?>[\s\S]*?<\/sheetData>/, serializer.serializeToString(sheetData));
        if (rows.length + 1 > range.e.r + 1) outputXml = outputXml.replace(/<dimension\b[^>]*\/>/, serializer.serializeToString(doc.getElementsByTagNameNS(ns,'dimension')[0]));
        zip.file(path, outputXml);
        return zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE' });
    }
    return { fields, byId, dateIds, normalizeHeader, parseDate, formatDate, excelDate, readQuestionnaire, normalizeValue, derive, validate, peselInfo, emailError, destinationColumns, exportTemplate };
})();
