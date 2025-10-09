// Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
//
// WSO2 LLC. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied. See the License for the
// specific language governing permissions and limitations
// under the License.

import React from 'react';
import './Table.scss';

interface TableRowProps {
  data: {
    id: string;
    refId: string;
    mtMessageType: string;
    mxMessageType: string;
    currency: string;
    date: string;
    direction: string;
    amount: string;
    status: string;
    originalMessage: string;
    translatedMessage: string;
  };
  onClick: () => void;
}

const TableRow: React.FC<TableRowProps> = ({ data, onClick }) => {
  return (
    <tr className='tableRow' onClick={onClick}>
      <td>{data.refId}</td>
      <td>{data.id}</td>
      <td>{data.mtMessageType}</td>
      <td>{data.mxMessageType}</td>
      <td>{data.direction}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
      <td>{data.date}</td>
      <td>{data.status}</td>
    </tr>
  );
};

export default TableRow;
