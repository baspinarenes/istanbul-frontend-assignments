const showListButtonDOM = document.querySelector(".show-button");
const filterButtonDOM = document.querySelector(".filter-button");
const sortingButtonDOM = document.querySelector(".sorting-button");
const isAdultDOM = document.querySelector(".adult-checkbox");
const isActiveDOM = document.querySelector(".active-checkbox");
const searchTextInputDOM = document.querySelector(".search-text");
const filterSummaryDivDOM = document.querySelector(".filter-summary");
const dataTableDOM = document.querySelector(".data-table tbody");

let personList = [];
let currentPersonList = [];

showListButtonDOM.addEventListener('click', () => {
    fetch("../assets/data.json")
    .then(response => {
        return response.json();
    })
    .then(responseData => {
        personList = responseData;
        currentPersonList = [...responseData];
        // personList = responseData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        filterButtonDOM.style.pointerEvents = "unset";
        sortingButtonDOM.style.pointerEvents = "unset";
        listData(responseData);
    })
    .catch(err => {
        alert("Bir hata oluştu!");
    })
});

filterButtonDOM.addEventListener('click', filterData)
sortingButtonDOM.addEventListener('click', () => {
    const sortedPersonalList = currentPersonList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    listData(sortedPersonalList);
})

const listData = (filteredPersonList) => {
    filterSummaryDivDOM.style.display = "block";

    if(filteredPersonList == personList) {
        filterSummaryDivDOM.innerHTML = `Showing <strong>${personList.length}</strong> entries.`;
    } else {
        filterSummaryDivDOM.innerHTML = `Showing <strong>${personList.length}</strong> of <strong>${filteredPersonList.length}</strong> entry after filter.`;
    }

    let tableRows = "";

    filteredPersonList.forEach(element => {
        tableRows += `
        <tr>
            <td>${element.name}</td>
            <td>${element.number}</td>
            <td>${element.email}</td>
            <td>${element.age}</td>
            <td>${element.city}</td>
            <td>${element.isActive}</td>
        </tr>
        `;
    });

    dataTableDOM.innerHTML = tableRows;
}

function filterData() {
    let filteredPersonList = [...personList];
    
    if(isActiveDOM.checked) {
        filteredPersonList = filteredPersonList.filter((person) => { return person.isActive });
    }

    if(isAdultDOM.checked) {
        filteredPersonList = filteredPersonList.filter((person) => { return person.age >= 18 });
    }

    if(searchTextInputDOM.value) {
        filteredPersonList = filteredPersonList.filter((person) => { return searchTextInputDOM.value.toLowerCase() === person.name[0].toLowerCase() });
    }

    currentPersonList = filteredPersonList;
    listData(filteredPersonList);
}