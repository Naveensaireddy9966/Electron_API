const url = new URL(
    "https://geektheory.in/geekbills/connector/api/brand"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU0MDMxODQxNTYxODZlYWZhZDQzNDI0ZjBhNDI5MjBmOTBmOTdkMjFhYzQ2MzI4ZmU0YmNhYzRiNmYyNGQzN2M3OGNlM2Y3YTJhZGIyMDgxIn0.eyJhdWQiOiI3IiwianRpIjoiZTQwMzE4NDE1NjE4NmVhZmFkNDM0MjRmMGE0MjkyMGY5MGY5N2QyMWFjNDYzMjhmZTRiY2FjNGI2ZjI0ZDM3Yzc4Y2UzZjdhMmFkYjIwODEiLCJpYXQiOjE2NzkzMDQ0MDIsIm5iZiI6MTY3OTMwNDQwMiwiZXhwIjoxNzEwOTI2ODAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.VzpOTUAZBenf_ThVwRQBslBXl_aVV3OYADs87cFw4mZUIKN0CQ0WuL7j9UyVuw6B5nP6QjmSyGg8vmfumbSW2j5VeGiLMP3JeYAG8-1W1yo1pdujrfzHDVSAWyDdDnhHfVug4mEjFC5tb4V1nE-37q0fra1f5YGdo-q2-rtqcqfZX1L48brcqEagWI9szITKlWUyl8A55XqFOwRi-i-YyyvD0pgKRuUc_bkYV5odrbvHVDBMCCNQwVhTfDxBWvARydH7ECluZPSvGvdhhDC11J7fZyIZybbRy-ONHyhGv-4sc08yqVQ_zUokx4Im4TNe9AhUWWWQNsSM0nNOLDY09wXT4-IC0YTeb2l2yJe1PtnfLwpe6y-mCHpzUlCtSVFT0_C80vA3y3UA6t2Au7R-LjEou0E4Io7fNoHz2oMtvK2xIUw8NvAX0mE_m19vVQG0b2W9wn-agKh1IwdltfMwqRdPjXAqcrHCGllKIT-ThmVZxvi5DTzBqw0YcAXVk0zhQ9i6nkCvyx7X7B2oN_jlphaUKBnyv7teBIsrWw8Pk0fsf4sWwnScRsauM9Fu99_oZ4FIUJ8NTDYva6bORiWz1cU95FC8McLdlX2HhSTf1OxwvCM4Rm_qRxoVuPND-WkEHYUke3nnYm1gDRhMilQGoiKhTWsWcR3vMNxmaf3MdHk",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    
    .then(response => { return response.json()})
    .then((objectData) => {
        let data = ""
        objectData.data.forEach((values,idx) => {
            tableData =`<tr>
            <th id = 'firstNo' scope="row">${idx + 1}</th>
            <td id= 'firstName'>${values.name}</td>
            </tr>`
            data += tableData
            console.log(data)
        })
        document.getElementById('table_body').innerHTML = data
       }
    )

    

