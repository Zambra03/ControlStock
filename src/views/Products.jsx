import styled from "styled-components";
import { MyForm1 } from "../components/MyformsIN/MyForm1";
import '../styles/Form1.css'
export function Products() {
  return (
    <Container>
      <div className="cont">
          <div className='MyForm'>
            <h1>NEW PRODUCT</h1>
            <table >
                <tr>
                    <td>CODE</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>PRODUCT</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>QUANTITY</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>CATEGORIE</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>BRAND</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>STATE</td>
                    <td>
                        <input type="text"  ></input>
                    </td>
                </tr>
            </table>
      
            <button name="save">SAVE</button>
          </div>

          <div className='MyForm'>
            <h1>UPDATE PRODUCT</h1>
            <table >
                <tr>
                    <td>CODE</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>PRODUCT</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>QUANTITY</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>CATEGORIA</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>BRAND</td>
                    <td>
                        <input type="text"></input>
                    </td>
                </tr>
                <tr>
                    <td>STATE</td>
                    <td>
                        <input type="text"  ></input>
                    </td>
                </tr>
            </table>
            <button name="save">SAVE</button>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
`;