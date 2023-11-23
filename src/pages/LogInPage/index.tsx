import * as RN from "react"
import { useNavigate } from "react-router-dom"
function LogInPage() {
  let navigate = useNavigate()
  const age = RN.useRef<HTMLInputElement | null>(null);
  const userName = RN.useRef<HTMLInputElement | null>(null);;
  const [sex, sexSet] = RN.useState<Number>(1);

  const handleSelectChange = (event: RN.ChangeEvent<HTMLSelectElement>) => {
    age.current = event.target.value as unknown as HTMLInputElement;
  };
  const submit = () => {
    console.log(userName.current?.value)
    console.log(sex)
    console.log(age.current)
    navigate('/mainPage')
  }
  return (
    <>
    <div>
      <label>userName:</label>
      <input name="userName" id="userName" type="text" ref={userName} placeholder="enter" />

      <div >
        <input type="radio" id="huey" name="drone" value={1} checked onChange={()=>sexSet(1)}/>
        <label >男</label>
      </div>
      <div >
        <input type="radio" id="dewey" name="drone" value={2} onChange={()=>sexSet(2)} />
        <label >女</label>
      </div>

      <label>Age:</label>
      <select
        style={{ width: 150,height:50 }}
        onChange={(e)=>handleSelectChange(e)}
      >
        <option key={1} value={1}>
          1
        </option>
        <option key={2} value={2}>
          2
        </option>
      </select>
      </div>
      <button onClick={()=>submit()}>5555</button>
    </>
  );
}

export default LogInPage;
