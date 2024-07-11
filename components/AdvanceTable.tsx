'use client'
import { dataCollate as data } from '@/constants';
import React, { useState, useMemo } from 'react';





const AdvanceTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = item.pollingStation.pollingStationName.toLowerCase().includes(searchTerm.toLowerCase()) || item.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus ? item.pollingStation.pollingStationName === filterStatus : true;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterStatus, data]);

  const totalApcVotes = filteredData.reduce((acc, curr) => acc + curr.pollingStation.ndcVotes, 0);
  const totalAkaVotes = filteredData.reduce((acc, curr) => acc + curr.pollingStation.nppVotes, 0);
  const totalVotes = totalApcVotes + totalAkaVotes;
  const apcPercentage = ((totalApcVotes / totalVotes) * 100).toFixed(2);
  const akaPercentage = ((totalAkaVotes / totalVotes) * 100).toFixed(2);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Polling Station or Email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">All</option>
        <option value="failed">Failed</option>
        <option value="success">Success</option>
      </select>
      <table>
        <thead className="gap-5">
          <tr className="gap-5">
            <th>Polling Station Name</th>
            <th>APC Votes</th>
            <th>AKA Votes</th>
            <th>Rejected Ballot</th>
            <th>Total Votes</th>
            <th>Total Turned Out</th>
            <th>Input</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.filter((filteredData => filteredData.pollingStation.nppVotes <= 0 && filteredData.pollingStation.ndcVotes <=0 )).map(({ id, pollingStation }) => (
            <tr key={id}>
              <td>{pollingStation.pollingStationName}</td>
              <td>{pollingStation.ndcVotes}</td>
              <td>{pollingStation.nppVotes}</td>
              <td>{pollingStation.rejectedBallot}</td>
              <td>{pollingStation.ndcVotes + pollingStation.nppVotes}</td>
              <td>{pollingStation.ndcVotes + pollingStation.nppVotes + pollingStation.rejectedBallot}</td>
              <td>
                <input type="text" className="w-[40px]"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p>Total APC Votes: {totalApcVotes}</p>
        <p>Total AKA Votes: {totalAkaVotes}</p>
        <p>APC Votes Percentage: {apcPercentage}%</p>
        <p>AKA Votes Percentage: {akaPercentage}%</p>
      </div>
    </div>
  );
};

export default AdvanceTable;