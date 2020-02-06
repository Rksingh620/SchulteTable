let array = [];
        document.getElementById('btn').addEventListener('click',function(e){
            //for settingtimer function in game
            // setInterval(function(){ addValueToTextFieldHERE }, 1000);
            //flushing Table cells
            document.getElementById('table').innerHTML = '';
            //preventing reload
            e.preventDefault();

            let size = document.getElementById('inp').value;
            let n= 1,td;
            for(let i = 1;i<=size;i++){
                let tr = document.createElement('tr');
                for(let j = 1;j<=size;j++){
                    td = `<td id =${n}></td>`;
                    tr.innerHTML+=td;
                    n++;
            }
            document.getElementById('table').appendChild(tr);
            }
            for(let i = 1;i<=size*size;i++){
                array.push(i);
            }
            createTable(array);
        });
        //const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const createTable=(arr)=>{
        let n=1;
        const shuffleArray = shuffle(arr);
        shuffleArray.forEach(num => {
            let td = document.getElementById(n);
            // td.innerHTML="";
            console.log(num);
            td.innerHTML = num;
            n++;
        });
        }
        function shuffle(arr){
            arr.sort(()=>Math.random()-0.5);
            return arr;
        }