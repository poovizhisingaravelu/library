import React from "react";
export default function Student()
{
  
  return (
    <div>
      <table class=" table table-info table-bordered">
      <tr>
      <th scope="col">#</th>
      <th scope="col-mb-2">Bookid</th>
      <th scope="col-mb-2">BookName</th>
      <th scope="col-mb-2">Return date</th>
      <th scope="col-mb-2">Fine</th>
      </tr>
 
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>C01</td>
      <td>Cloud Computing</td>
     
      <td>14/03/2023</td>
      <td>Nil</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>D01</td>
      <td>Data structure</td>
      
      <td>30/05/23</td>
      <td>Nil</td>
    </tr>
    
  </tbody>
      </table>
      <button class="btn btn-secondary">ok</button>
    </div>
  
  
  )
}