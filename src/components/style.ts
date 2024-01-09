import style from 'styled-components'

export const Style = style.div`

.todo{
  margin-left:20px;
}
.appBtn{
  padding: 10px;
  margin-left:20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
}

.allButton,.pendingButton,.completeButton{
  padding: 10px;
  // background: #d9d9d9;
  // float: left;
  margin-left:20px;
  margin-top:20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 10px;
}

ul {
    margin: 0;
    padding: 0;
    background: blue;
    width:20vw;
  }
  
  ul li {
    width:26vw;
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    list-style-type: none;
    background: #eee;
    transition: 0.2s;
    align-item:center;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;   
  }
  
  ul li:nth-child(odd) {
    background: #f9f9f9;
  }
  
  ul li:hover {
    background: #ddd;
  }
  
  ul li .complete-task {
    text-decoration: line-through;
  }
  .completeStatus{
    width: 30px;
    height:30px;
    text-align:center;
  }
  
  p{
    font-size:15px;
  }
  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
background-color: transparent;
border:none;
  }

  span{
    margin-left:20px;
  }
  
  .close:hover {
    background-color: #f44336;
    color: white;
  }
  
  .header {
    background-color: grey;
    color: white;
    text-align: center;
    width:30vw;

  }
  
  .header:after {
    content: "";
    display: table;
    clear: both;
  }
  
  input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 65%;
    padding: 10px;
    float: left;
    font-size: 16px;
    border-radius: 10px;
    margin-left:20px;
  }
  
  .addBtn {
    padding: 10px;
    background: #d9d9d9;
    float: left;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 10px;
  }
  
  .addBtn:hover {
    background-color: #bbb;
  }

 
`
  