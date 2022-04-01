import create from "zustand"; //create : state 보관함 만드는 함수...
const useStore = create((set) => ({
  //파라미터에set 넣어주면 state를 변경해주는 set함수사용이가능해진다...!
  count: 0,
  up() {
    set((state) => ({ count: state.count + 1 }));
  },
}));
//콜백함수 만들고
//객체형식으로 보관하고싶은 state들 만들기...
//그리고 변수에 담아서 쓰는데, 보통 이름은 useStore
export default useStore;
