import React from "react";
import { baseUrl } from "../urls/menuOptionsList";
import { useGetData } from "../Hooks/useGetData";
import { ReactComponent as SvgAdd } from "./add.svg";
import { EmptyList } from "../EmptyList";
import filter from "./filter.svg";
import "./ClientSearch.css"

function ClientSearch({ setClientId, isSearchClientOpen, setIsSearchClientOpen }) {
  const [searchClient, setSearchClient] = React.useState('');

  const url = baseUrl + 'clients/';
  const { data } = useGetData(url);
  
  const filteredData = data.filter((register) => {
    let fullInfo;
    fullInfo = `${register.id} ${register.name} ${register.lastname}`;
    fullInfo = fullInfo.toLowerCase();
    const searchText = searchClient.toLowerCase();
    return fullInfo.includes(searchText);
  });

  return (
    <div className={`flx flx-col client-search-container ${isSearchClientOpen || "hidden"}`}>
      <div className="flx flx-center client-search">
        <search className="flx flx-center search">
          <input
            type="search"
            id="search-clients"
            className="frm-input frm-input-search"
            placeholder="Search client"
            value={searchClient}
            onChange={(event) => setSearchClient(event.target.value)}
          ></input>
        </search>

        <button type="button" className="flx flx-center client-btn">
          <img src={filter} alt="Filter"></img>
        </button>
      </div>

      <div className="flx flx-col clients-list">
        {filteredData.length === 0 && <EmptyList/>}
        {filteredData.map(register => (
            <div
              key={register.id}
              className="flx clients"
            >
              <span className="flx flx-center client-search-id">{register.id}</span>
              <div className="flx client-search-info">
                <span className="flx client-search-name">{`${register.name} ${register.lastname}`}</span>
              </div>
              <SvgAdd
                className="flx client-search-add"
                onClick={() => {
                  setClientId(register.id);
                  setIsSearchClientOpen(false);
                }}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export { ClientSearch };