import { useEffect } from 'react'
import './App.css'
import { ConfigProvider } from 'antd';
import { APIInfos } from './components/APIInfos';
import { AppLayout } from './components/AppLayout';
import { loadSpec } from './datalayer/loadSpec';
import { APIServices } from './components/APIServices';
import { APIGlobals } from './components/APIGlobals';

function App() {

  useEffect(() => {
    loadSpec();
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
      <AppLayout>
        <APIInfos />
        <APIServices />
        <APIGlobals />
      </AppLayout>
    </ConfigProvider>
  )
}

export default App
