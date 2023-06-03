import { Prof, Tecs } from './helpersTypes';
export function listProfs(profs: Prof[]) {
 const list = profs.map((p)=>`<li>${p.nome}-${p.sala}</li>`);
 return `<ul>${list.join('')}</ul>`;
}
export function listTecs(tecs: Tecs[]) {
    const list = tecs.map((element) => {
        if(element.poweredByNodejs){
            return`<li>${element.name}-${element.type}</li>`;
        }
    })
    return `<ul>${list.join('')}</ul>`;
}