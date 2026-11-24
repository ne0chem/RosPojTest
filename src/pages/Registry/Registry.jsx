import React, { useEffect, useId, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { registries, filterRegistryRecords } from '../../data/registry';
import { ServiceIcon } from '../../components/ServicesSection/ServicesSection';
import NotFound from '../NotFound/NotFound';
import './Registry.css';

export function RegistryCards({ initialId }) {
  const [selectedId, setSelectedId] = useState(initialId ?? null);
  const [selectionCount, setSelectionCount] = useState(0);
  const detailsRef = useRef(null);
  const detailsId = useId();
  const selected = registries.find(item => item.id === selectedId);
  useEffect(() => {
    if (!selectionCount) return;
    const frame = requestAnimationFrame(() => {
      detailsRef.current?.querySelector('h2')?.scrollIntoView({
        behavior: 'instant',
        block: 'start',
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [selectionCount]);
  return <>
    <div className="services-section-grid registry-cards">{registries.map(registry =>
      <button key={registry.id} type="button" onClick={() => { setSelectedId(registry.id); setSelectionCount(count => count + 1); }} aria-expanded={selectedId === registry.id} aria-controls={detailsId} className="service-card registry-card" style={{ '--service-image': `url('/images/services/${registry.image}.jpg')` }}>
        <ServiceIcon name={registry.icon} /><h3>{registry.title}</h3><p>{registry.description}</p><span className="registry-card-link">{selectedId === registry.id ? 'Реестр открыт' : 'Открыть реестр'}</span>
      </button>
    )}</div>
    <div id={detailsId} ref={detailsRef} className="registry-details" hidden={!selected}>
      {selected && <section aria-labelledby={`${detailsId}-title`}>
        <h2 id={`${detailsId}-title`}>{selected.title}</h2>
        <p className="registry-lead">{selected.description}</p>
        <RegistryTable key={selected.id} registry={selected} />
      </section>}
    </div>
  </>;
}

export default function Registry() {
  const { registryId } = useParams();
  const registry = registries.find(item => item.id === registryId);
  if (registryId && !registry) return <NotFound />;
  return <section className="registry-page">
    <h1>Реестр</h1>
    <p className="registry-lead">Выберите направление, чтобы найти сведения об экспертах, испытательных лабораториях или выданных документах.</p>
    <RegistryCards key={registryId ?? 'all'} initialId={registryId} />
  </section>;
}

function RegistryTable({ registry }) {
  const [query, setQuery] = useState('');
  const [exact, setExact] = useState(false);
  const [search, setSearch] = useState({ query: '', exact: false });
  const records = filterRegistryRecords(registry, search.query, search.exact);
  function reset() { setQuery(''); setExact(false); setSearch({ query: '', exact: false }); }
  return <>
    <form className="registry-search" role="search" onSubmit={event => { event.preventDefault(); setSearch({ query, exact }); }}>
      <label htmlFor="registry-query">Поисковый запрос</label>
      <div className="registry-search-row"><input id="registry-query" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={registry.placeholder} /><button className="button" type="submit">Найти</button></div>
      <label className="registry-exact"><input type="checkbox" checked={exact} onChange={event => setExact(event.target.checked)} />Искать по точному совпадению</label>
    </form>
    <div className="registry-results" role="status">Найдено записей: {records.length}{search.query && <button type="button" onClick={reset}>Сбросить поиск</button>}</div>
    <div className="registry-table-scroll" role="region" aria-label={`Таблица: ${registry.title}`} tabIndex={0}>
      <table className="registry-table"><caption className="registry-sr-only">{registry.title}</caption><thead><tr>{registry.columns.map(([key, title]) => <th key={key} scope="col">{title}</th>)}</tr></thead>
        <tbody>{records.length ? records.map(record => <tr key={record.number}>{registry.columns.map(([key]) => <td key={key}>{key === 'status' ? <span className="registry-status">{record[key] || '—'}</span> : record[key] || '—'}</td>)}</tr>) : <tr><td className="registry-empty" colSpan={registry.columns.length}><strong>{registry.records.length ? 'Ничего не найдено' : 'Записи пока не добавлены'}</strong><span>{registry.records.length ? 'Измените запрос или отключите точное совпадение.' : 'После наполнения реестра здесь появятся сведения и будет доступен поиск по всем колонкам.'}</span></td></tr>}</tbody>
      </table>
    </div>
  </>;
}
