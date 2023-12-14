import './App.css';
import UseOnlineStatusHook from './Components/Custom Hooks/Custom Hook 4/UseOnlineStatusHook';
// import UseFetchHook from './Components/Custom Hooks/Custom Hook 3/UseFetchHook';
// import WindowsHook from './Components/Custom Hooks/Custom Hook 2/WindowsHook';
// import Child1 from './Components/HOC/Child1';
// import Child2 from './Components/HOC/Child2';
// import HOC from './Components/HOC/HOC';
// import ToggleComp from './Components/Custom Hooks/Custom Hook 1/ToggleComp';
// import CustomHookExmp from './Components/Custom Hooks/Custom Hook Exmp/CutomHookExmp'

function App() {
  return (
    <div className="App">
      {/* <Child1/>
      <Child2/> */}
      {/* <WindowsHook/> */}
      {/* <UseFetchHook/> */}
      <UseOnlineStatusHook/>

    </div>
  );
}

export default App;
