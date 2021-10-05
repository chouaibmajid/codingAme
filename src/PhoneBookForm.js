import react,{useState , useEffect} from "react"
const style ={
    form: {
        container: {
          padding: "20px",
          border: "1px solid #F0F8FF",
          borderRadius: "15px",
          width: "max-content",
          marginBottom: "40px",
        },
        inputs: {
          marginBottom: "5px",
        },
        submitBtn: {
          marginTop: "10px",
          padding: "10px 15px",
          border: "none",
          backgroundColor: "lightseagreen",
          fontSize: "14px",
          borderRadius: "5px",
        },
      },
}
export default function PhoneBookForm({modifyState}) {
const [data, setData] = useState({
    userFirstname:"",
    userLastname:"",
    userPhone:""

})
 const handleUserChange = (e) => {
setData({
    ...data,[e.target.name]:e.target.value
})

 } 

 const handleSubmit = (e) => {
     e.preventDefault();
     modifyState(data);
 }
    return (
      <form onSubmit={(e) => handleSubmit(e)} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text"  onChange={handleUserChange} />
        <br />
        <label>Last name:</label>
        <br />
        <input style={style.form.inputs} className="userLastname" name="userLastname" type="text"  onChange={handleUserChange} />
        <br />
        <label>Phone:</label>
        <br />
        <input style={style.form.inputs} className="userPhone" name="userPhone" type="text"  onChange={handleUserChange} />
        <br />
        <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
      </form>
    );
  }