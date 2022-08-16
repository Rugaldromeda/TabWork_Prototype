import { BudgetControl } from "../controllers/Budget-controller.js";


    

export const viewBudgetController = (name:string,Control:BudgetControl) =>{
        const formWController = document.createElement("form");
        const formatName = name.replace(/\s+/g, '').replace(/\.+/g , '');
        formWController.setAttribute(`data-controller-${formatName}`, "");
    
        
        const labelName = document.createElement("label");
        labelName.innerHTML = "Criar tab"
        const inputName = document.createElement("input");
        inputName.classList.add("name");
        inputName.placeholder = "Nome";

        const selectType = document.createElement("select");
        selectType.classList.add("type");

        const optionsTypeTab = ["Defina o tipo de Tab", "Receita", "Despesa", "Balanço"];
        optionsTypeTab.forEach((op)=>{
            const option = document.createElement("option");
            option.innerHTML = op;
            option.value = op.toLowerCase().replace(/\s+/g,"_");
            selectType.appendChild(option);
        });

        
        const button = document.createElement("button");
        button.innerHTML = "SALVAR";
    
        formWController.appendChild(labelName);
        formWController.appendChild(inputName);
        formWController.appendChild(selectType);
        formWController.appendChild(button);

        
        
        const nameArea = formWController.querySelector(".name") as HTMLInputElement;
        const type = formWController.querySelector(".type") as HTMLFormElement;
        
        
        formWController.addEventListener("submit", (event) =>{
            event.preventDefault();
            Control.add(nameArea.value, type.value);
        })
    
        return formWController;
}


