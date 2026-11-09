export const VERSION = 1;
export const classes = ['Sun', 'Shade'];
const row=(x,y,label)=>({x,y,label});
export const starter = [row(.14,.15,0),row(.2,.24,0),row(.28,.13,0),row(.31,.29,0),row(.7,.72,1),row(.78,.85,1),row(.86,.73,1),row(.65,.86,1)];
export const additions = [.13,.23,.33].flatMap(x=>[row(x,.72,1),row(x,.86,1),row(1-x,.14,0),row(1-x,.28,0)]);
export const testSet = [.12,.26,.74,.88].flatMap(x=>[.16,.3,.7,.84].map(y=>row(x,y,y<.5?0:1)));
export function validateRows(rows) {
 if(!Array.isArray(rows)||rows.length<2||rows.length>500) throw Error('Use 2–500 labeled examples.');
 for(const p of rows) if(!p||typeof p!=='object'||!Number.isFinite(p.x)||!Number.isFinite(p.y)||p.x<0||p.x>1||p.y<0||p.y>1||![0,1].includes(p.label)) throw Error('Each example needs x and y from 0 to 1, and label 0 or 1.');
 if(new Set(rows.map(p=>p.label)).size!==2) throw Error('Include at least one example of each class.');
 return rows.map(p=>row(p.x,p.y,p.label));
}
export function predict(rows,x,y,k=3) {
 if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||x>1||y<0||y>1) throw Error('Coordinates must be from 0 to 1.');
 if(![1,3,5].includes(k)) throw Error('Choose k = 1, 3 or 5.');
 if(rows.length<k) throw Error(`Add at least ${k} examples before fitting.`);
 const neighbors=rows.map((p,index)=>({...p,index,distance:Math.hypot(p.x-x,p.y-y)})).sort((a,b)=>a.distance-b.distance||a.index-b.index).slice(0,k);
 const shade=neighbors.reduce((sum,p)=>sum+p.label,0),label=shade>k/2?1:0;
 return {label,share:Math.max(shade,k-shade)/k,neighbors,far:neighbors[0].distance>.3};
}
export function fit(rows,k=3) {
 const data=validateRows(rows); if(![1,3,5].includes(k)||data.length<k) throw Error('Choose k = 1, 3 or 5, with at least k examples.');
 return {rows:data,k};
}
export function evaluate(model,tests=testSet) {
 const matrix=[[0,0],[0,0]]; const results=tests.map(p=>{const prediction=predict(model.rows,p.x,p.y,model.k);matrix[p.label][prediction.label]++;return {...p,predicted:prediction.label,correct:p.label===prediction.label};});
 return {correct:results.filter(p=>p.correct).length,total:results.length,matrix,results};
}
export function parseDataset(text) {
 if(typeof text!=='string'||text.length>100000) throw Error('Import a JSON file under 100 KB.');
 let data;try{data=JSON.parse(text);}catch{throw Error('This file is not valid JSON.');}
 if(!data||data.version!==VERSION||data.kind!=='signal-garden-dataset') throw Error('Choose a Signal Garden dataset, version 1.');
 return validateRows(data.rows);
}
export const dataset=rows=>({kind:'signal-garden-dataset',version:VERSION,features:['leaf width','stem height'],labels:classes,disclosure:'Fictional teaching examples, not botanical measurements.',rows:validateRows(rows)});
