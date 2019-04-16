let qs = require("querystring");


let  handle500 = (res) =>{
    res.writeHeader(500, "server error");
    res.end();
}

function sendHtml(res, html){
    res.writeHeader(200, {
        'Content-Type': "text/html;charset=utf-8", 
        "Content-Length": Buffer.byteLength(html)
    });
    res.end(html);
}

function parseReceivedData(req, cb){
    let body = "";

    req.setEncoding("utf8");
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
        body = qs.unescape(body);
        let data = qs.parse(body);
        cb(data); 
    });
}

function actionForm(id, path, label){
    let html = `
        <form method="POST" action="${path}">
            <input type="hidden" name="id" value="${id}" />
            <input type="submit" value="${label}" />
        </form>
    `
    return html;
}


function add(db ,req, res){
    parseReceivedData(req, work => {
        db.query(
            `
            insert into work (hours, date, description)
            values ('${work.hours}', '${work.date}', '${work.description}');
            `,
            err => {
                if(err) throw err;
                show(db, res);
            }
        )
    })
}

function deleteData(db, req, res){
    parseReceivedData(req, work => {
        db.query(
            `
            delete from work where id=${work.id}
            `,
            err => {
                if(err) throw err;
                show(db, res);
            }
        )
    })
}

function archive(db, req, res){
    parseReceivedData(req, work => {
        db.query(
            `
            update work set archived=1 where id=${work.id}
            `,
            err => {
                if(err) throw err;
                show(db, res);
            }
        )
    })
}

function show(db, res, showArchived){
    let archiveValue = showArchived ? 1 : 0;

    db.query(
        `
            select * from work where archived=${archiveValue} order by date desc
        `,
        (err, rows) => {
            if(err){
                handle500(res); 
                throw err;
            } 
            html = showArchived ? "" : `
                <a href="/archived">Archived Work</a><br />
            `;
            html += workHitlistHtml(rows);
            html += workFormHtml();
            sendHtml(res, html);
        }
    )
}

function showArchived(db, res){
    show(db, res, true);
}

function workHitlistHtml(rows){
    let html = "<table>";
    rows.forEach(row => {
        html += `
            <tr>
                <td>${row.date}</td>
                <td>${row.hours}</td>
                <td>${row.description}</td>
        `
        if(!row.archived){
            html += `
                <td>${workArchiveForm(row.id)}</td>
                <td>${workDeleteForm(row.id)}</td>
            `
        }
        html += "</tr>";
    })
    html += `
        </table>
    `;
    return html;
}

function workFormHtml(){
    let html = `
        <form method="POST" action="/" enctype="multipart/x-www-form-urlencoded" accept-charset="UTF-8">
            <p>Date (YYY-MM-DD): <br /> <input name="date" type="text" /></p>
            <p>Hours worked: <br/> <input name="hours" type="text" /></p>
            <p>Description: <br/> <textarea name="description"></textarea> </p>
            <input type="submit" value="Add" />
        </form>
    `;
    return html;
}

function workArchiveForm(id){
    return actionForm(id, '/archive', 'Archive');
};

function workDeleteForm(id){
    return actionForm(id, '/delete', 'Delete');
}


module.exports = {
    add,
    archive,
    deleteData,
    show,
    showArchived
}