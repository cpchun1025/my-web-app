import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  HeaderFilter,
} from 'devextreme-react/data-grid';

const DataDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data/transformed');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataGrid
      dataSource={data}
      showBorders={true}
      columnAutoWidth={true}
      rowAlternationEnabled={true}
    >
      <FilterRow visible={true} />
      <HeaderFilter visible={true} />
      <Paging defaultPageSize={10} />
      <Pager
        showPageSizeSelector={true}
        allowedPageSizes={[5, 10, 20]}
        showInfo={true}
      />
      <Column dataField="id" caption="ID" width={70} />
      <Column dataField="data" caption="Data" />
      <Column dataField="isApproved" caption="Approved" />
    </DataGrid>
  );
};

export default DataDashboard;