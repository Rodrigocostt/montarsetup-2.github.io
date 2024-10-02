const btn = document.querySelector(".img-login")
const login = document.querySelector('.tela-login')
function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !email || !senha) {
        alert('Você não pode logar, pois há dados faltando!');
    } else {
        fazerLogin(nome); 
    }
}

function salvarNome(nome) {
    localStorage.setItem('nomeUsuario', nome);
}

function DesabilitarLogin(){           
    btn.classList.remove('display-off')
    login.classList.add('display-off')

}
const nomeUsuario = localStorage.getItem('nomeUsuario') || "Usuário não identificado";

const opcoesConfig = {
notebook: {
    cpu: [
        "Intel i3 - R$ 1.200",
        "Intel i5 - R$ 1.800",
        "AMD Ryzen 5 - R$ 1.700",
        "AMD Ryzen 7 - R$ 2.300"
    ],
    ram: [
        "8GB DDR4 - R$ 400",
        "16GB DDR4 - R$ 700",
        "32GB DDR4 - R$ 1.200",
        "64GB DDR4 - R$ 2.400"
    ],
    armazenamento: [
        "500GB HDD - R$ 300",
        "1TB HDD - R$ 400",
        "256GB SSD - R$ 500",
        "512GB SSD - R$ 800"
    ],
    sistema: [
        "Windows 10 - R$ 600",
        "Linux - Grátis"
    ]
},
desktop: {
    cpu: [
        "Intel i3 - R$ 1.200",
        "Intel i5 - R$ 1.800",
        "AMD Ryzen 5 - R$ 1.700",
        "AMD Ryzen 7 - R$ 2.300"
    ],
    ram: [
        "8GB DDR4 - R$ 400",
        "16GB DDR4 - R$ 700",
        "32GB DDR4 - R$ 1.200",
        "64GB DDR4 - R$ 2.400"
    ],
    armazenamento: [
        "500GB HDD - R$ 300",
        "1TB HDD - R$ 400",
        "256GB SSD - R$ 500",
        "512GB SSD - R$ 800"
    ],
    monitor: [
        "21.5\" - R$ 800",
        "24\" - R$ 1.000",
        "27\" - R$ 1.500",
        "32\" - R$ 2.000"
    ],
    sistema: [
        "Windows 10 - R$ 600",
        "Linux - Grátis"
    ]
}
};

function mostrarMenu(tipo) {
    tipoSelecionado = tipo; 
    const menu = document.getElementById('menu');
    menu.innerHTML = ''; 

    const components = opcoesConfig[tipo];
    Object.keys(components).forEach(component => {
        const select = document.createElement('select');
        select.id = `${component}${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`;

        components[component].forEach(opcao => {
            const option = document.createElement('option');
            option.value = opcao;
            option.textContent = opcao;
            select.appendChild(option);
        });

        const label = document.createElement('h4');
        label.textContent = component.charAt(0).toUpperCase() + component.slice(1) + ':';
        
        menu.appendChild(label);
        menu.appendChild(select);
    });

    document.getElementById('opcoes').style.display = 'block'; 
}

function mostrarResumo() {
    if (!tipoSelecionado) {
        alert("Por favor, selecione um tipo de máquina primeiro."); 
        return; 
    }

    let resumo = `Nome: ${nomeUsuario}\nEscolhas:\n${tipoSelecionado.charAt(0).toUpperCase() + tipoSelecionado.slice(1)}:\n`;

    const components = opcoesConfig[tipoSelecionado];
    for (const component in components) {
        const select = document.getElementById(`${component}${tipoSelecionado.charAt(0).toUpperCase() + tipoSelecionado.slice(1)}`);
        if (select) {
            resumo += `${component.charAt(0).toUpperCase() + component.slice(1)}: ${select.value}\n`;
        }
    }

    alert(resumo); 
}