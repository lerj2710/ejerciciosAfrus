     var app = new function() {

      this.el = document.getElementById('materia');
      this.materia = ['Fisica', 'Matematica', 'Ingles', 'Spain', 'Quimica',];
        
        this.Count = function(data) {
       // llamando a posicion de materia 
        var el   = document.getElementById('contador');
          var name = 'escuela';
                if (data) {
                  if (data > 1) {
                    name = 'materia';
                  }
                  el.innerHTML = data + ' ' + name ;
                } else {
                  el.innerHTML = 'No ' + name;
                }
      };
  
        this.FetchAll = function() {
          var data = '';
            if (this.materia.length > 0) {
              for (i = 0; i < this.materia.length; i++) {
                data += '<tr>';
                data += '<td>' + this.materia[i] + '</td>';
                data += '<td><button class="btn btn-primary" onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button class="btn btn-danger" onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '<td><button class="btn btn-warning" onclick="app.Clean(' + i + ')">Clean</button></td>';
                data += '</tr>';
              }
          }
          this.Count(this.materia.length);
          return this.el.innerHTML = data;
        };
  this.Add = function () {
    el = document.getElementById('add-name');
    // obtener nuevo valor
    var escuela = el.value;
    if (escuela) {
      // agregar nuevo valor
      this.materia.push(escuela.trim());
      // reiniciar input
      el.value = '';
      // nueva lista
      this.FetchAll();
    }
    return this.el.innerHTML = data;
     el = document.getElementById('add-time');
    
    var escuela = el.value;
    if (escuela) {
  
      this.materia.push(escuela.trim());
      e
      el.value = '';
      
      this.FetchAll();
    }

  };

  this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        // Mostrar valor en el campo
        el.value = this.materia[item];
       
        // este es el editor de materia
        document.getElementById('Editor').style.display = 'block';
        self = this;
        document.getElementById('saveEdit').onsubmit = function() {
          // Obtener valor
          var escuela = el.value;
          if (escuela) {
            // Editar valor
            self.materia.splice(item, 1, escuela.trim());
            // Mostar la nueva lista
            self.FetchAll();
            // Ocultar campos
            CloseInput();
          }
        }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.materia.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

  this.Clean = function (item) {
    // Clean the current row
    this.materia.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('Editor').style.display = 'none';
}