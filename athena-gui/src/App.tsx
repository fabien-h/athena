import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import { ConfigProvider } from 'antd';
import { SideNav } from './components/SideNav';

function App() {
  const [json, setJSON] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3000/get-spec');
      const data = await response.json();

      console.log(data);

      setJSON(data);
    })();
  }, []);


  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          // Seed Token
          fontFamily: 'inherit',
          colorPrimary: '#000',
          colorTextBase: '#000',
          // borderRadius: 10,
          // fontSize: 14,
          controlHeight: 34,
          // lineWidth: 2,
          // sizeUnit: 5,
          // lineHeight: 1.8,

          // Alias Token
          colorBgContainer: '#fff',
          colorBgBase: '#fff',
          colorBgLayout: '#fff',
          colorBorder: 'rgb(228, 228, 231)',
          colorBorderSecondary: 'rgb(228, 228, 231)',
        },
        components: {
          Menu: {
            itemSelectedBg: '#000',
            itemSelectedColor: '#fff',
          },
          Tree: {
            nodeSelectedBg: '#eee'
          },
        }
      }}
    >
      {JSON.stringify(json || '[]')}

      <SideNav />
    </ConfigProvider>
  )
}

export default App
