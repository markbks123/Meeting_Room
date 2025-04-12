import { Space, TableProps, Tag } from "antd";
import { HistoryType } from "./history.types";


const useHistory = () =>{

    const columns: TableProps<HistoryType>['columns'] = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Team',
          key: 'team',
          dataIndex: 'tags',
          render: (_, { team }) => (
            <>
              {team.map((team) => {
                let color = team.length > 5 ? 'geekblue' : 'green';
                if (team === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={team}>
                    {team.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
       
      ];
      
      const data: HistoryType[] = [
        {
          key: '1',
          name: 'ธารินทร์',
          team: ['ADD', 'RVP'],
          date: "",
          booking: ""
        },
        {
          key: '2',
          name: 'ธาริริน',
          team: ['ADD', 'RVP'],
          date: "",
          booking: ""
        },
        {
          key: '3',
          name: 'ธาริริน',
          team: ['ADD', 'RVP'],
          date: "",
          booking: ""
        },
      ];
   return {
    columns,
    data
   };
}

export default useHistory
