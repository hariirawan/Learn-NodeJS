var http = require('http');
var url = require('url');
var router = require('routes')();
var fs = require('fs')
var view = require('swig');
var queryString = require('querystring');
var connection = require('./Database.js');



router.addRoute('/', (req, res) => {
   connection.db.query('select * from table_mhs', (err, rows, field) => {
      if(err) throw err;
      var html = view.compileFile('./Templates/Index.html')({
          Title: "Data Mahasiswa",
          data: rows
      });
      res.writeHead(200, {'Content-type':'text/html'});
      res.end(html); 
   }); 
});

//Melakukan aksi penginputan Data
router.addRoute('/Insert', (req, res) => {
    if(req.method.toUpperCase() == 'POST'){
        var data_post = '';
        req.on('data', (chunks) => {
            data_post += chunks;
        });

        req.on('end', _ => {
            data_post = queryString.parse(data_post);
            connection.query('insert into table_mhs set ?', data_post, (err, fields) => {
                if(err) throw err;
                res.writeHead(302, {'Location':'/'});
                res.end();
            })            
        })
    }else{
        var html = view.compileFile('./Templates/Insert.html')({
            Title: "Tambah Data Mahasiswa"
        });
        res.writeHead(200, {'Content-type':'text/html'});
        res.end(html);
    }
});

//Melakukan aksi Update Data
router.addRoute('/Update/:id', function(req, res){
    connection.db.query('select * from table_mhs where ?', {
        id_mhs : this.params.id
    }, function(err, rows, field){
        if(err) throw err;
        if(rows.length){
            var data = rows[0];
            if(req.method.toUpperCase() == "POST"){
                var data_post = '';
                req.on('data', function(chunks){
                    data_post += chunks;
                })
                
                req.on('end', function() {
                    data_post = queryString.parse(data_post);
                    connection.db.query('Update table_mhs set ? where ?', [data_post, {
                            id_mhs : Number(data.id_mhs)
                    }], function(err, field){
                            if(err) throw err;
                        res.writeHead(302, {'Location':'/'});
                        res.end();
                    })
                })
            }else{
                var html = view.compileFile('./Templates/Update.html')({
                    data : data
                });
                res.writeHead(200, {'Content-type': 'text/html'});  
                res.end(html);
            }
        }else{
            res.writeHead(404, {'Content-type':'text/plan'});
            res.end('test error');
        }
    });
});

//Melakukan Aksi Delete Data
router.addRoute('/Delete/:id', function(req, res){
    connection.db.query('Delete from table_mhs where ?',{
        id_mhs : this.params.id
    }, (err, field) => {
        if(err) throw err;
        res.writeHead(302, {'Location':'/'});
        res.end();
    })
})




http.createServer(function(req, res){
    var path = url.parse(req.url).pathname;
    var match = router.match(path);

    if(match){
        match.fn(req, res);
    }else{
        res.writeHead(200, {'Content-type':'text/plan'});
        res.end('test error');
    }
}).listen(3000);

console.log("Server is running...");