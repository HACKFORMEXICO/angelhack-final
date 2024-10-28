import dynamic from 'next/dynamic'

const ActivitiesMenu = dynamic(() => import('@/components/activities-menu'), { ssr: false })

const App = () => (
    <ActivitiesMenu />
);

export default App;
