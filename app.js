let count = 0;
const imployes = [{
    imgChange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDC46ry_N5miYpCDqnClSU8ioMRWhKXWxhSA&s',
    nameChange: 'Samm Anderson',
    infoChange: 'Front end Developer',
    discriptionChange: 'Front-end development involves creating the visual and interactive aspects of a website or application using HTML, CSS, and JavaScript, ensuring a seamless user experience across different devices and browsers.',
},
{
    imgChange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm37T7VlAVnh6Why6twjVi9vLRNm1XSyVvrYw_iOeZIPx5G8T-4JdRXyz9Vy4tQuEYjPA&usqp=CAU',
    nameChange: 'Emma GarField',
    infoChange: 'Sales TL',
    discriptionChange: 'A Sales Team Leader motivates and manages sales teams, sets targets, analyzes sales data, develops strategies, and ensures excellent customer service to drive revenue growth and achieve company goals.',

},
{
    imgChange: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Emma_Robert_2016_Comic_Con.jpg/640px-Emma_Robert_2016_Comic_Con.jpg',
    nameChange: 'Demmna Watson',
    infoChange: 'human resources (HR)',
    discriptionChange: 'Human Resources (HR) manages employee relations, recruitment, training, and compliance. HR ensures a positive workplace, aligns staff with company goals, and addresses employee needs and organizational development.',
},
{
    imgChange: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
    nameChange: 'Jhon Smith',
    infoChange: 'Full stack Developer',
    discriptionChange: 'A Full Stack Developer is proficient in both front-end and back-end development, skilled in creating and managing web applications, databases, servers, and ensuring seamless user experiences across platforms.',
},
{
    imgChange: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEeq1ZAQnVE23Ktqrrsdswk4VQjrK8IFvWA&s',
    nameChange: 'Lisa Thomas',
    infoChange: 'CEO',
    discriptionChange: 'A CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for strategic decisions, overall management, leadership, and ensuring organizational goals and objectives are met effectively.',
},


]
function nexthandler() {
    count++;
    if (count >= imployes.length) {
        count = 0;
    }
    console.log(count)
    changeData()
}
function peviousHandler() {
    count--
    if(count < 0){
        count = imployes.length -1;
    }
    console.log(count)
    changeData()
} 

function changeData(){
    const update = imployes[count];
    document.querySelector('#image').src = update.imgChange
    document.querySelector('#name').textContent = update.nameChange
    document.querySelector('#positon').textContent = update.infoChange
    document.querySelector('#positon').style.fontSize = '16px'
    document.querySelector('#Discr').textContent = update.discriptionChange
}