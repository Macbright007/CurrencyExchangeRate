import styled from "styled-components";

export const CardBody = styled.div`
  background: white;
  height: 70vh;
  width: 50%;
  margin: 70px auto;
  border-radius: 5px;

  @media screen and (min-width:300px) and (max-width: 650px) {
     {
        width: 80%;
        padding: 20px;
    }
  }

  @media screen and (min-width:400px) and (max-width: 700px) {
    {
       width: 80%;
       padding: 20px;
   }
 }
  h1 {
    color: gray;
    
  }

  button{
    padding: 10px;
    border-radius: 5px;
    width: 20%;
    border:none;
    font-size: 17px;
    background: rgba(27, 27, 27, 0.185);
    margin-top: -40px;
  }
  button:hover{
    background-color:gray;
    cursor: pointer;
  }

  @media screen and (min-width:300px) and (max-width: 650px) {
    button {
        width: 80%;
    }
  }
`;
export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-direction: column;
  margin: 20px auto;

  input {
    padding: 5px;
    font-size: 20px;
    height: 30px;
    background: rgba(27, 27, 27, 0.185);
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;
    border:none;
    width: 47%;
  } 

  @media screen and (min-width:300px) and (max-width: 650px) {
    input {
        width: 90%;
    }
  }

  select {
    padding: 7px;
    font-size: 15px;
    height: 40px;
    background: rgba(27, 27, 27, 0.185);
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 30px 10px;
    border:none;
  }
 
  h3 {
    color: gray;
  }

`;

