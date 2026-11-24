export const registries = [
  { id: 'experts', title: 'Эксперты', description: 'Сведения об экспертах и направлениях их деятельности.', icon: 'certificate', image: 'architecture', placeholder: 'ФИО, номер свидетельства или специализация', columns: [
    ['number', 'Номер в реестре'], ['name', 'ФИО эксперта'], ['specialization', 'Специализация'], ['certificate', 'Номер свидетельства'], ['issuedAt', 'Дата выдачи'], ['validUntil', 'Срок действия'], ['status', 'Статус'],
  ], records: [] },
  { id: 'laboratories', title: 'Испытательные лаборатории', description: 'Сведения об испытательных лабораториях и их аккредитации.', icon: 'microscope', image: 'fire/hero', placeholder: 'Название лаборатории, ИНН или номер аттестата', columns: [
    ['number', 'Номер в реестре'], ['name', 'Наименование лаборатории'], ['inn', 'ИНН'], ['address', 'Адрес'], ['certificate', 'Номер аттестата'], ['scope', 'Область аккредитации'], ['status', 'Статус'],
  ], records: [] },
  { id: 'documents', title: 'Протоколы и заключения', description: 'Сведения о выданных протоколах испытаний и заключениях.', icon: 'documents', image: 'blueprints', placeholder: 'Номер документа, заказчик или объект исследования', columns: [
    ['number', 'Номер документа'], ['type', 'Тип документа'], ['issuedAt', 'Дата выдачи'], ['customer', 'Заказчик'], ['object', 'Объект исследования'], ['issuer', 'Эксперт / лаборатория'], ['status', 'Статус'],
  ], records: [] },
];

export function filterRegistryRecords(registry, query, exact = false) {
  const normalize = value => String(value ?? '').toLocaleLowerCase('ru-RU').replaceAll('ё', 'е').trim().replace(/\s+/g, ' ');
  const search = normalize(query);
  if (!search) return registry.records;
  return registry.records.filter(record => registry.columns.some(([key]) => exact ? normalize(record[key]) === search : normalize(record[key]).includes(search)));
}
