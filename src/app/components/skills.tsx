import React from 'react';
import CollapsibleMenu, { MenuItem } from './dropdown';
export default function Skills() {
    const genSkills: MenuItem[] = [
    {label: 'Time Management',},
    {label: 'Organization',},
    {label: 'Teamwork',children: [{ label: 'Communication' }, { label: 'Conflict Resolution' },],},
    {label: 'Adaptability',},];

    const techSkills: MenuItem[] = [
    {label: 'Programming Languages', children: [{label: 'Java'}, { label: 'C' },{ label: 'HTML' },{ label: 'MIPS Assembly'},
        { label: 'JavaScript/TypeScript' },],},
    {label: 'Software', children: [{label: 'Eclipse'}, { label: 'Git' },{ label: 'VSCode' },{ label: 'MobaXTerm' },
        { label: 'Emacs' },{ label: 'Zoom' },{ label: 'QtSpim' },{ label: 'Figma' },{ label: 'Miro' },],},
    {label: 'Frameworks/Libraries', children: [{label: 'Node.js'}, { label: 'React' },{ label: 'JavaFX' },],},
    {label: 'Databases', children: [{label: 'MongoDB'},],},];

return (
<div id="Skills">
    <h2 className='SectionTitle'>Skills</h2>
    <CollapsibleMenu title="General Skills" items={genSkills}/>
    <CollapsibleMenu title="Technical Skills" items={techSkills}/>
</div>
);
}