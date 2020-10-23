<template>
<div>
  <div class="large-12 columns">
    <h1>Mis Libros</h1>
    <br><br>
    <table id="test-table">
      <thead>
      <tr>
        <th>Númeroo</th>
        <th>Nombre Libro</th>
        <th>Autor</th>
        <th>Año</th>
      </tr>
      </thead>
      <tfoot></tfoot>
      <tbody>
      <tr>
        <td>lorem1</td>
        <td>lorem2</td>
        <td>lorem3</td>
        <td>lorem4</td>
      </tr>
      <tr>
        <td>lorem1</td>
        <td>lorem2</td>
        <td>lorem3</td>
        <td>lorem4</td>
      </tr>
      <tr>
        <td>lorem1</td>
        <td>lorem2</td>
        <td>lorem3</td>
        <td>lorem4</td>
      </tr>
      <tr>
        <td>lorem1</td>
        <td>lorem2</td>
        <td>lorem3</td>
        <td>lorem4</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script>
export default {
name: "Libros"
}
</script>

<style scoped>

/*#test-table{
  width: 100%;
  text-align: center;
}*/

table, td, th {
  border: 1px solid #ddd;
  text-align: center;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}
</style>