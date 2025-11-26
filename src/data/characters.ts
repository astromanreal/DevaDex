
import type { Character, CharacterType, TextSource, Yuga, CharacterNature, CharacterGender } from '@/lib/types';

// Import all category data and their types
import { DEMON_CATEGORY_DATA, type NotableDemon } from './demon-category-data';
import { ASURA_CATEGORY_DATA, type NotableAsura } from './asura-category-data';
import { RAKSHASA_CATEGORY_DATA, type NotableRakshasa } from './rakshasa-category-data';
import { DAITYA_CATEGORY_DATA, type NotableDaitya } from './daitya-category-data';
import { DANAVA_CATEGORY_DATA, type NotableDanava } from './danava-category-data';
import { YAKSHA_CATEGORY_DATA, type NotableYakshaFigure } from './yaksha-category-data';
import { DEVI_CATEGORY_DATA, type MajorForm as DeviMajorForm, type DeviAvatarAndForm } from './devi-category-data'; // Aliased MajorForm to DeviMajorForm
import { DEVA_CATEGORY_DATA, type MajorDeva } from './deva-category-data';
import { TRIMURTI_CATEGORY_DATA, type TrimurtiMember } from './trimurti-category-data';
import { DASHAVATAR_CATEGORY_DATA, type DashavatarEntry } from './dashavatar-category-data';
import { NAVDURGA_CATEGORY_DATA, type NavdurgaForm } from './navdurga-category-data';
import { SAPTARISHI_CATEGORY_DATA, type SaptarishiEntry } from './saptarishi-category-data';
import { PRAJAPATI_CATEGORY_DATA, type NotablePrajapati as PrajapatiSourceEntry } from './prajapati-category-data';
import { APSARAS_CATEGORY_DATA, type NotableApsara } from './apsaras-category-data';
import { GANDHARVA_CATEGORY_DATA, type NotableGandharva } from './gandharva-category-data';
import { EKADASHA_RUDRA_CATEGORY_DATA, type EkadashaRudraAvatar } from './ekadasha-rudra-category-data';
import { MAHADEVA_AVATARS_CATEGORY_DATA, type MahadevaAvatar } from './mahadeva-avatars-category-data';
import { AVATAR_CATEGORY_DATA, type AvatarEntry as GeneralAvatarEntry } from './avatar-category-data';
import { NAVAGRAHA_CATEGORY_DATA, type NavagrahaEntry } from './navagraha-category-data';
import { PISHACHA_CATEGORY_DATA } from './pishacha-category-data'; 
import { MUNI_CATEGORY_DATA, type MuniEntry } from './muni-category-data';
import { KING_CATEGORY_DATA, type KingEntry } from './king-category-data';
import { WARRIOR_CATEGORY_DATA, type WarriorEntry } from './warrior-category-data';
import { OTHER_CELESTIAL_BEINGS_CATEGORY_DATA } from './other-celestial-beings-category-data';
import { NAGA_CATEGORY_DATA, type NagaNotableNaga } from './naga-category-data';
import { DASHA_MAHAVIDYA_CATEGORY_DATA, type DashaMahavidyaGoddessEntry } from './dasha-mahavidya-category-data'; // Corrected import

// Helper function to generate IDs
const generateCharacterId = (name: string, prefix: string = 'char'): string => {
  let cleanName = name;
  const prefixesToRemove = ["Maharishi ", "Rishi ", "King ", "Lord "];
  prefixesToRemove.forEach(p => {
    if (name.startsWith(p)) cleanName = name.substring(p.length);
  });
  return `${prefix}-${cleanName.toLowerCase().replace(/\s+/g, '-').replace(/[()']/g, '')}`;
};


// Mapper functions (ensure these are comprehensive)
const mapDemonToCharacter = (demon: NotableDemon): Character => ({
    id: demon.id,
    name: { sanskrit: demon.sanskritName || demon.name, english: demon.name },
    type: demon.type,
    role: `${demon.type} known for ${demon.traits.join(', ').toLowerCase()}`,
    significance: `${demon.name} is a ${demon.type} from ${demon.epic || 'various texts'}. Key traits: ${demon.traits.join(', ')}. Symbolizes: ${demon.symbolism}. Defeated by: ${demon.defeated_by}.`,
    associatedTexts: demon.epic ? [demon.epic as TextSource] : ['Puranas'],
    stories: demon.notable_deeds.map(deed => ({ title: deed, summary: `A notable act of ${demon.name} where they ${deed.toLowerCase()}.` })),
    symbolism: demon.symbolism,
    imageUrl: demon.imageUrl,
    imageAiHint: demon.imageAiHint,
    yuga: demon.yuga as Yuga || 'All Yugas',
    region: demon.kingdom || 'Various',
    gender: 'Male', // Assuming male unless specified in source data
    nature: 'Evil', // Default for demons
});

const mapAsuraToCharacter = (asura: NotableAsura): Character => ({
    id: asura.id,
    name: { sanskrit: asura.sanskritName || asura.name, english: asura.name },
    type: 'Asura',
    role: `Asura known for ${asura.traits.join(', ').toLowerCase()}`,
    significance: `${asura.name} is an Asura from ${asura.epic || 'various texts'}. Key traits: ${asura.traits.join(', ')}. Symbolizes: ${asura.symbolism}. Defeated by: ${asura.defeated_by}.`,
    associatedTexts: asura.epic ? [asura.epic as TextSource] : ['Puranas'],
    stories: asura.notable_deeds.map(deed => ({ title: deed, summary: `A notable act of ${asura.name} where they ${deed.toLowerCase()}.` })),
    symbolism: asura.symbolism,
    imageUrl: asura.imageUrl,
    imageAiHint: asura.imageAiHint,
    yuga: asura.yuga || 'All Yugas',
    region: asura.kingdom || 'Various',
    gender: 'Male',
    nature: 'Evil',
});

const mapRakshasaToCharacter = (rakshasa: NotableRakshasa): Character => ({
    id: rakshasa.id,
    name: { sanskrit: rakshasa.sanskritName || rakshasa.name, english: rakshasa.name },
    type: 'Rakshasa',
    role: `Rakshasa known for ${rakshasa.traits.join(', ').toLowerCase()}`,
    significance: `${rakshasa.name} is a Rakshasa from ${rakshasa.epic || 'various texts'}. Key traits: ${rakshasa.traits.join(', ')}. Symbolizes: ${rakshasa.symbolism}. ${rakshasa.defeated_by ? `Defeated by: ${rakshasa.defeated_by}.` : ''}`,
    associatedTexts: rakshasa.epic ? [rakshasa.epic as TextSource] : ['Puranas'],
    stories: rakshasa.notable_deeds.map(deed => ({ title: deed, summary: `A notable act of ${rakshasa.name} where they ${deed.toLowerCase()}.` })),
    symbolism: rakshasa.symbolism,
    imageUrl: rakshasa.imageUrl,
    imageAiHint: rakshasa.imageAiHint,
    yuga: rakshasa.yuga || 'All Yugas',
    region: rakshasa.kingdom || 'Various',
    gender: (rakshasa.name.toLowerCase().includes("shurpanakha") || rakshasa.name.toLowerCase().includes("tataka")) ? 'Female' : 'Male',
    nature: (rakshasa.name.toLowerCase().includes("vibhishana")) ? 'Good' : 'Evil',
});

const mapDaityaToCharacter = (daitya: NotableDaitya): Character => ({
    id: daitya.id,
    name: { sanskrit: daitya.sanskritName || daitya.name, english: daitya.name },
    type: 'Daitya',
    role: `Daitya known for ${daitya.traits.join(', ').toLowerCase()}`,
    significance: `${daitya.name} is a Daitya from ${daitya.epic || 'various texts'}. Key traits: ${daitya.traits.join(', ')}. Symbolizes: ${daitya.symbolism}. ${daitya.defeated_by ? `Defeated by: ${daitya.defeated_by}.` : ''}`,
    associatedTexts: daitya.epic ? [daitya.epic as TextSource] : ['Puranas'],
    stories: daitya.deeds.map(deed => ({ title: deed, summary: `A notable deed of ${daitya.name}: ${deed}.` })),
    symbolism: daitya.symbolism,
    imageUrl: daitya.imageUrl,
    imageAiHint: daitya.imageAiHint,
    yuga: daitya.yuga || 'All Yugas',
    gender: 'Male', // Assuming male, can be refined if source data has gender
    nature: daitya.isGood ? 'Good' : 'Evil',
});

const mapDanavaToCharacter = (danava: NotableDanava): Character => ({
    id: danava.id,
    name: { sanskrit: danava.sanskritName || danava.name, english: danava.name },
    type: 'Danava',
    role: `Danava known for ${danava.traits.join(', ').toLowerCase()}`,
    significance: `${danava.name} is a Danava. Key traits: ${danava.traits.join(', ')}. Symbolizes: ${danava.symbolism}. ${danava.defeated_by ? `Defeated by: ${danava.defeated_by}.` : ''}`,
    associatedTexts: danava.epic ? [danava.epic] : DANAVA_CATEGORY_DATA.scriptural_references,
    stories: danava.deeds.map(deed => ({ title: deed, summary: `A notable deed of ${danava.name}: ${deed}.` })),
    symbolism: danava.symbolism,
    imageUrl: danava.imageUrl,
    imageAiHint: danava.imageAiHint,
    yuga: danava.yuga || 'All Yugas',
    gender: 'Male', // Assuming male
    nature: danava.isGood ? 'Good' : (danava.name === "Maya Danava" ? 'Neutral' : 'Evil'),
});

const mapYakshaToCharacter = (yaksha: NotableYakshaFigure): Character => ({
  id: generateCharacterId(yaksha.name, 'yaksha'),
  name: { sanskrit: yaksha.name, english: yaksha.name },
  type: 'Yaksha',
  role: yaksha.role,
  significance: yaksha.description || `${yaksha.name} is a Yaksha figure known for being ${yaksha.role}.`,
  associatedTexts: yaksha.scriptures as TextSource[],
  stories: yaksha.description ? [{ title: `Legend of ${yaksha.name}`, summary: yaksha.description }] : [],
  symbolism: `Guardian spirit, associated with nature and wealth. ${yaksha.name} represents ${yaksha.role}.`,
  imageUrl: yaksha.imageUrl,
  imageAiHint: yaksha.imageAiHint,
  yuga: 'All Yugas',
  gender: 'Male', // Default, Kubera is male
  nature: 'Neutral', // Yakshas are generally neutral
});

const mapDeviFormToCharacter = (form: DeviMajorForm | DeviAvatarAndForm, type: CharacterType = 'Devi'): Character => ({
    id: form.id || generateCharacterId(form.name, 'devi'),
    name: { english: form.name, sanskrit: (form as DeviMajorForm).epithet || form.name },
    type: type,
    role: form.role,
    significance: (form as DeviMajorForm).symbolism || (form as DeviAvatarAndForm).story || "A significant form of Devi.",
    associatedTexts: ['Puranas', 'Other'],
    stories: (form as DeviAvatarAndForm).story ? [{ title: `Story of ${form.name}`, summary: (form as DeviAvatarAndForm).story! }] : [],
    symbolism: (form as DeviMajorForm).symbolism || (form as DeviAvatarAndForm).symbolism,
    imageUrl: form.imageUrl || `https://picsum.photos/seed/${form.id || generateCharacterId(form.name, 'devi')}/600/400`,
    imageAiHint: form.imageAiHint || `${form.name.toLowerCase()} goddess form`,
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
});

const mapMajorDevaToCharacter = (deva: MajorDeva): Character => ({
    id: deva.id,
    name: { english: deva.name, sanskrit: deva.name },
    type: 'Deva',
    role: deva.title,
    significance: `Domain: ${deva.domain}. Symbolism: ${deva.symbolism}.`,
    associatedTexts: deva.texts ? deva.texts.map(t => t as TextSource) : ['Puranas'],
    stories: [{title: `Legend of ${deva.name}`, summary: `Associated with ${deva.domain}.`}],
    symbolism: deva.symbolism,
    imageUrl: deva.imageUrl,
    imageAiHint: deva.imageAiHint,
    yuga: 'All Yugas',
    gender: 'Male',
    nature: 'Good'
});

const mapTrimurtiMemberToCharacter = (member: TrimurtiMember): Character => ({
    id: member.id,
    name: { english: member.name, sanskrit: member.name },
    type: 'Trimurti',
    role: member.role,
    significance: member.attributes.symbolism,
    associatedTexts: member.scriptures,
    stories: [{ title: `Role of ${member.name}`, summary: `As ${member.role}, ${member.name} plays a crucial part in cosmic functions.` }],
    symbolism: member.attributes.symbolism,
    imageUrl: member.imageUrl,
    imageAiHint: member.imageAiHint,
    yuga: 'All Yugas',
    gender: 'Male',
    nature: 'Neutral',
});

const mapDashavatarToCharacter = (avatar: DashavatarEntry): Character => ({
    id: avatar.id,
    name: { sanskrit: avatar.sanskrit_name, english: avatar.name },
    type: 'Dashavatar',
    role: avatar.role,
    significance: `${avatar.name} (${avatar.meaning}), the ${avatar.avatar_order} avatar of Vishnu, appeared in ${avatar.yuga}. Key role: ${avatar.role}. Story: ${avatar.key_story}. Symbolizes: ${avatar.symbolism}.`,
    associatedTexts: avatar.associated_texts,
    stories: [{ title: avatar.meaning, summary: avatar.key_story }],
    symbolism: avatar.symbolism,
    imageUrl: avatar.imageUrl,
    imageAiHint: avatar.imageAiHint,
    linkedCharacters: [{ id: 'vishnu', name: 'Vishnu', relationship: 'Origin Deity' }],
    yuga: avatar.yuga,
    region: avatar.region_associated.join(', ') || 'Various',
    gender: 'Male',
    nature: 'Good',
});

const mapNavdurgaToCharacter = (form: NavdurgaForm): Character => ({
    id: form.id,
    name: { sanskrit: form.sanskrit_name, english: form.name },
    type: 'Navdurga',
    role: `Form of Goddess Durga, ${form.meaning}`,
    significance: `${form.name} (${form.meaning}), worshipped on ${form.day} of Navaratri. Symbolizes ${form.symbolism.toLowerCase()}.`,
    associatedTexts: ['Puranas', 'Other'],
    stories: [{ title: `Legend of ${form.name}`, summary: form.story }],
    symbolism: form.symbolism,
    imageUrl: form.imageUrl,
    imageAiHint: form.imageAiHint,
    linkedCharacters: form.associated_forms.map(af => ({ id: generateCharacterId(af, 'devi'), name: af, relationship: 'Related Form' })),
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
    depictions: [{ medium: "Iconography, Paintings", description: form.depiction }],
    teachings: form.qualities,
});

const mapSaptarishiToCharacter = (rishi: SaptarishiEntry): Character => ({
    id: rishi.id,
    name: { sanskrit: rishi.sanskrit_name, english: rishi.name },
    type: 'Saptarishi',
    role: `Great Sage (Rishi), ${rishi.meaning.substring(0, 50)}...`,
    significance: `${rishi.name}, one of the Saptarishis. ${rishi.meaning} Key contribution: ${rishi.contribution}.`,
    associatedTexts: rishi.epic || ['Vedas', 'Puranas'],
    stories: [{ title: `Legend of ${rishi.name}`, summary: rishi.story }],
    symbolism: rishi.symbolism,
    imageUrl: rishi.imageUrl,
    imageAiHint: rishi.imageAiHint,
    linkedCharacters: rishi.associated_deity ? [{id: generateCharacterId(rishi.associated_deity, 'deva'), name: rishi.associated_deity, relationship: "Associated Deity"}] : [],
    yuga: 'All Yugas',
    region: 'Cosmic/Various',
    gender: 'Male',
    nature: 'Good',
    lineage: rishi.lineage || "Divine Origin",
    teachings: rishi.qualities,
});

const mapPrajapatiToCharacter = (p: PrajapatiSourceEntry): Character => ({
    id: p.id,
    name: { english: p.name, sanskrit: p.sanskrit_name },
    type: 'Prajapati',
    role: p.role || p.significance.substring(0,50)+'...',
    significance: p.story || p.significance || p.contribution || `A significant Prajapati known as ${p.name}.`,
    associatedTexts: p.associated_texts || ['Puranas', 'Vedas'],
    lineage: "Mind-born son of Brahma (Manasaputra) or as per specific lore",
    stories: [{ title: p.role || `Story of ${p.name}`, summary: p.story || p.contribution || 'Details about this Prajapati.' }],
    symbolism: p.symbolism,
    teachings: p.qualities,
    imageUrl: p.imageUrl,
    imageAiHint: p.imageAiHint,
    yuga: 'All Yugas',
    gender: 'Male',
    nature: (p.name === 'Daksha' && p.story?.includes("insulted Lord Shiva")) ? 'Neutral' : 'Good',
});

const mapApsaraToCharacter = (apsara: NotableApsara): Character => ({
  id: apsara.id,
  name: { sanskrit: apsara.sanskrit_name, english: apsara.name },
  type: 'Apsaras',
  role: `Celestial Nymph, ${apsara.epithet || 'skilled in arts'}`,
  significance: `${apsara.name} is a celestial nymph known for ${apsara.skills.join(', ')}. ${apsara.famous_stories[0]?.summary || ''}`,
  associatedTexts: ['Puranas', 'Mahabharata', 'Ramayana'],
  stories: apsara.famous_stories,
  symbolism: apsara.symbolism,
  imageUrl: apsara.imageUrl,
  imageAiHint: apsara.imageAiHint,
  yuga: 'All Yugas',
  gender: 'Female',
  nature: 'Neutral',
  lineage: "Celestial origin",
  teachings: apsara.qualities,
  linkedCharacters: apsara.associated_with.map(assoc => ({id: generateCharacterId(assoc, 'char'), name: assoc, relationship: "Associated Figure"}))
});

const mapGandharvaToCharacter = (gandharva: NotableGandharva): Character => ({
  id: gandharva.id,
  name: { sanskrit: gandharva.name, english: gandharva.name },
  type: 'Gandharva',
  role: gandharva.role,
  significance: `${gandharva.name} is a celestial musician associated with ${gandharva.associated_with}. Attributes: ${gandharva.attributes.join(', ')}. ${gandharva.story || ''}`,
  associatedTexts: gandharva.scriptures as TextSource[],
  stories: gandharva.story ? [{ title: `Legend of ${gandharva.name}`, summary: gandharva.story }] : [],
  symbolism: gandharva.symbolism,
  imageUrl: gandharva.imageUrl || `https://picsum.photos/seed/${gandharva.id}/600/400`,
  imageAiHint: gandharva.imageAiHint || `gandharva ${gandharva.name.toLowerCase()}`,
  yuga: 'All Yugas',
  gender: 'Male',
  nature: 'Good',
});

const mapEkadashaRudraToCharacter = (rudra: EkadashaRudraAvatar): Character => ({
    id: rudra.id,
    name: { sanskrit: rudra.name, english: rudra.name },
    type: 'Ekadasha Rudra',
    role: `Manifestation of Shiva, embodying ${rudra.key_concepts.join(', ').toLowerCase()}`,
    significance: rudra.significance,
    associatedTexts: rudra.texts,
    stories: [{ title: `Aspect of ${rudra.name}`, summary: rudra.description }],
    symbolism: rudra.symbolism.join('; '),
    imageUrl: rudra.imageUrl,
    imageAiHint: rudra.imageAiHint,
    linkedCharacters: [{ id: 'shiva', name: 'Shiva', relationship: 'Origin Deity' }],
    yuga: 'All Yugas',
    gender: 'Male',
    nature: rudra.name.toLowerCase().includes('aghora') || rudra.name.toLowerCase().includes('rudra') ? 'Neutral' : 'Good',
    teachings: rudra.key_characteristics,
});

const mapMahadevaAvatarToCharacter = (avatar: MahadevaAvatar): Character => ({
    id: avatar.id,
    name: { sanskrit: avatar.name, english: avatar.name },
    type: 'Mahadeva Avatars',
    role: `Form of Mahadeva (Shiva), ${avatar.description.substring(0, 50)}...`,
    significance: avatar.description,
    associatedTexts: ['Puranas', 'Other'],
    stories: avatar.associated_legends.map(legend => ({ title: legend.title, summary: legend.summary })),
    symbolism: avatar.symbolism,
    depictions: [{ medium: 'Sculptures, Paintings', description: avatar.depiction }],
    imageUrl: avatar.imageUrl,
    imageAiHint: avatar.imageAiHint,
    linkedCharacters: [{ id: 'shiva', name: 'Shiva', relationship: 'Origin Deity' }],
    yuga: 'All Yugas',
    gender: 'Male',
    nature: (avatar.name === "Pashupatinath" || avatar.name === "Mahadeva" ) ? 'Good' : ((avatar.name === "Bhairava" || avatar.name === "Rudra" || avatar.name === "Tripurari") ? 'Fierce' : 'Neutral'),
});

const mapGeneralAvatarToCharacter = (avatar: GeneralAvatarEntry): Character => ({
    id: avatar.id,
    name: { sanskrit: avatar.name, english: avatar.name },
    type: 'Avatar',
    role: avatar.type,
    significance: avatar.description,
    associatedTexts: avatar.scriptures,
    stories: [{ title: `Legend of ${avatar.name}`, summary: avatar.purpose }],
    symbolism: avatar.symbols.join('; '),
    imageUrl: avatar.imageUrl,
    imageAiHint: avatar.imageAiHint,
    linkedCharacters: [{id: generateCharacterId(avatar.parentDeity, 'deity'), name: avatar.parentDeity, relationship: "Parent Deity"}],
    yuga: 'All Yugas',
    gender: avatar.name === "Mohini" ? 'Female' : (avatar.name === "Ardhanarishvara" ? 'Androgynous' : 'Male'),
    nature: (avatar.type === "Shiva Avatar" && (avatar.name === "Bhairava" || avatar.name === "Veerabhadra")) ? 'Fierce' : (avatar.name === "Ardhanarishvara" ? 'Neutral' : 'Good'),
});

const mapNavagrahaToCharacter = (graha: NavagrahaEntry): Character => ({
  id: generateCharacterId(graha.englishName, 'navagraha'),
  name: { sanskrit: graha.name, english: graha.englishName },
  type: 'Navagraha',
  role: `Celestial Influencer, ${graha.type}`,
  significance: graha.description,
  associatedTexts: ['Puranas', 'Other'],
  stories: [{ title: `Influence of ${graha.englishName}`, summary: `Governs aspects like ${graha.rulingDeity}, ${graha.element}, and influences destiny.` }],
  symbolism: `Represents ${graha.nature} cosmic force affecting life. Gemstone: ${graha.gemstone}, Color: ${graha.color}.`,
  imageUrl: graha.imageUrl || `https://picsum.photos/seed/navagraha-${graha.name.toLowerCase()}/400/300`,
  imageAiHint: `navagraha ${graha.englishName.toLowerCase()} astrology`,
  yuga: 'All Yugas',
  gender: 'N/A', // Or specific if known, often personified as male
  nature: graha.nature === "Benefic" ? 'Good' : 'Neutral', // Malefic could be 'Neutral' or 'Evil' based on interpretation
  linkedCharacters: [{id: generateCharacterId(graha.rulingDeity, 'deity'), name: graha.rulingDeity, relationship: "Ruling Deity"}]
});

const mapMuniToCharacter = (muni: MuniEntry): Character => ({
    id: muni.id,
    name: { english: muni.name, sanskrit: muni.name }, // Assuming Sanskrit name is same if not provided
    type: 'Muni',
    role: muni.titles.join(', '),
    significance: muni.description,
    associatedTexts: muni.scriptures as TextSource[],
    stories: muni.notable_acts.map(act => ({ title: act, summary: `A notable act of Muni ${muni.name}: ${act}.` })),
    symbolism: muni.philosophy || "Wisdom and asceticism",
    imageUrl: muni.imageUrl,
    imageAiHint: muni.imageAiHint,
    yuga: 'All Yugas', // Assuming, can be made specific
    gender: 'Male',
    nature: 'Good',
    lineage: Array.isArray(muni.parents) ? muni.parents.join(', ') : muni.parents,
    teachings: muni.philosophy ? [muni.philosophy] : [],
});

const mapKingToCharacter = (king: KingEntry): Character => ({
    id: king.id,
    name: { english: king.name, sanskrit: king.name },
    type: 'King',
    role: king.title,
    significance: king.description,
    associatedTexts: king.scriptures as TextSource[] || ['Puranas', 'Mahabharata'],
    stories: king.notable_acts.map(act => ({ title: act, summary: `A notable act of King ${king.name}: ${act}.` })),
    symbolism: "Kingship, Dharma, Governance",
    imageUrl: king.imageUrl,
    imageAiHint: king.imageAiHint,
    yuga: king.period as Yuga, // Needs mapping if period format differs
    gender: 'Male',
    nature: 'Good', // Default, can be nuanced
    region: king.dynasty,
});

const mapWarriorToCharacter = (warrior: WarriorEntry): Character => ({
    id: warrior.id,
    name: { english: warrior.name, sanskrit: warrior.name },
    type: 'Warrior',
    role: warrior.title,
    significance: warrior.description,
    associatedTexts: warrior.scriptures as TextSource[] || ['Mahabharata', 'Ramayana'],
    stories: warrior.notable_acts.map(act => ({ title: act, summary: `A notable act of Warrior ${warrior.name}: ${act}.` })),
    symbolism: "Valor, Dharma, Combat",
    imageUrl: warrior.imageUrl,
    imageAiHint: warrior.imageAiHint,
    yuga: warrior.period as Yuga,
    gender: 'Male', // Default
    nature: 'Good', // Default
});

const mapNagaToCharacter = (naga: NagaNotableNaga): Character => ({
  id: naga.id,
  name: { english: naga.name, sanskrit: naga.name },
  type: 'Naga',
  role: naga.role,
  significance: `${naga.name} (${naga.meaning}) is a Naga known for: ${naga.attributes.join(', ')}. Associated with ${Array.isArray(naga.associated_with) ? naga.associated_with.join(', ') : naga.associated_with}.`,
  associatedTexts: naga.scriptures as TextSource[],
  stories: [{title: `Legend of ${naga.name}`, summary: `Role: ${naga.role}. Symbolism: ${naga.symbolism}. Abode: ${naga.abode}.`}],
  symbolism: naga.symbolism,
  imageUrl: naga.imageUrl || `https://picsum.photos/seed/naga-${naga.id}/600/400`,
  imageAiHint: naga.imageAiHint || `naga serpent ${naga.name.toLowerCase()}`,
  yuga: 'All Yugas',
  gender: naga.name.includes("Devi") ? 'Female' : 'Male', // Simple heuristic
  nature: 'Neutral',
});

const mapDashaMahavidyaToCharacter = (goddess: DashaMahavidyaGoddessEntry): Character => ({
  id: goddess.id, // Assuming ID is already generated
  name: { english: goddess.name, sanskrit: goddess.sanskritName || goddess.name },
  type: 'Das Mahavidya',
  role: goddess.role,
  significance: goddess.significance,
  associatedTexts: ['Puranas', 'Other'], // Tantric texts
  stories: [{title: `Power of ${goddess.name}`, summary: goddess.depiction}],
  symbolism: goddess.significance, // Using significance as symbolism here for brevity
  imageUrl: goddess.imageUrl,
  imageAiHint: goddess.imageAiHint,
  yuga: 'All Yugas',
  gender: 'Female',
  nature: 'Neutral', // Mahavidyas have fierce and benign aspects
  linkedCharacters: goddess.consort ? [{id: generateCharacterId(goddess.consort, 'deity'), name: goddess.consort, relationship: "Consort"}] : [],
});


// Initial characters
export const ALL_CHARACTERS_INITIAL: Character[] = [
  {
    id: 'rama',
    name: { sanskrit: 'राम', english: 'Rama' },
    type: 'Avatar',
    role: 'Ideal King, Preserver of Dharma',
    significance: 'Seventh avatar of Vishnu, protagonist of the Ramayana, embodiment of righteousness and virtue. One of the Dashavataras.',
    associatedTexts: ['Ramayana', 'Puranas'],
    lineage: 'Suryavamsha (Sun dynasty), Son of Dasharatha and Kausalya',
    stories: [
      { title: 'Birth and Early Life', summary: 'Born in Ayodhya, trained by Vashistha and Vishwamitra.' },
      { title: 'Sita Swayamvara', summary: 'Broke Shiva\'s bow to win Sita\'s hand in marriage.' },
      { title: 'Exile', summary: 'Exiled to the forest for 14 years due to Kaikeyi\'s boon.' },
      { title: 'Abduction of Sita', summary: 'Sita was abducted by Ravana, leading to the war.' },
      { title: 'War with Ravana', summary: 'Defeated Ravana and rescued Sita with the help of Hanuman and the Vanara army.' },
      { title: 'Reign as King', summary: 'Ruled Ayodhya justly, establishing Rama Rajya.' },
    ],
    symbolism: 'Represents dharma, truth, ideal manhood, and righteous leadership.',
    teachings: ['Importance of upholding promises', 'Duty over personal desire', 'Path of righteousness'],
    relatedTemples: [{ name: 'Ram Janmabhoomi Temple', location: 'Ayodhya' }],
    depictions: [{ medium: 'Sculptures, Paintings, Theatre (Ramlila)', description: 'Often depicted with a bow and arrow, accompanied by Sita, Lakshmana, and Hanuman.' }],
    imageUrl: 'https://i.pinimg.com/736x/6c/d3/ce/6cd3ce2e82893b36974f9c2915968977.jpg',
    imageAiHint: 'indian deity warrior',
    linkedCharacters: [
      { id: 'sita', name: 'Sita', relationship: 'Wife' },
      { id: 'lakshmana', name: 'Lakshmana', relationship: 'Brother' },
      { id: 'hanuman', name: 'Hanuman', relationship: 'Devotee, Ally' },
      { id: 'ravana', name: 'Ravana', relationship: 'Antagonist' },
      { id: 'vishnu', name: 'Vishnu', relationship: 'Origin Deity' },
      { id: 'vasishtha-muni', name: 'Vashistha', relationship: 'Guru' }, // Updated ID
      { id: 'vishvamitra-muni', name: 'Vishvamitra', relationship: 'Guru' }, // Updated ID
    ],
    yuga: 'Treta Yuga',
    region: 'Ayodhya',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'krishna',
    name: { sanskrit: 'कृष्ण', english: 'Krishna' },
    type: 'Avatar',
    role: 'Divine Statesman, Teacher of Bhagavad Gita',
    significance: 'Eighth avatar of Vishnu, a central figure in the Mahabharata and Puranas. One of the Dashavataras.',
    associatedTexts: ['Mahabharata', 'Puranas'], // Bhagavad Gita is part of Mahabharata
    lineage: 'Yaduvamsha (Yadu dynasty), Son of Vasudeva and Devaki, raised by Nanda and Yashoda',
    stories: [
      { title: 'Birth and Childhood Lilas', summary: 'Born in Mathura, miraculous escape, playful childhood in Vrindavan.' },
      { title: 'Killing of Kamsa', summary: 'Fulfilled prophecy by slaying his tyrannical uncle Kamsa.' },
      { title: 'Role in Mahabharata', summary: 'Guided the Pandavas, delivered the Bhagavad Gita to Arjuna.' },
      { title: 'Establishment of Dwaraka', summary: 'Founded and ruled the city of Dwaraka.' },
    ],
    symbolism: 'Represents divine love, wisdom, political acumen, and the concept of Leela (divine play).',
    teachings: ['Karma Yoga (Path of Action)', 'Bhakti Yoga (Path of Devotion)', 'Jnana Yoga (Path of Knowledge) from Bhagavad Gita'],
    relatedTemples: [{ name: 'Dwarkadhish Temple', location: 'Dwarka' }, { name: 'Banke Bihari Temple', location: 'Vrindavan' }],
    depictions: [{ medium: 'Paintings, Sculptures, Dance forms', description: 'Often depicted playing a flute, with Radha, or as Arjuna\'s charioteer.' }],
    imageUrl: 'https://i.pinimg.com/736x/71/3d/98/713d987c956dc97f8ce245e6d3f3f270.jpg',
    imageAiHint: 'indian deity flute',
    linkedCharacters: [
      { id: 'arjuna', name: 'Arjuna', relationship: 'Friend, Disciple' },
      { id: 'radha', name: 'Radha', relationship: 'Divine Consort (in some traditions)' },
      { id: 'vishnu', name: 'Vishnu', relationship: 'Origin Deity' },
    ],
    yuga: 'Dvapara Yuga',
    region: 'Mathura',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'shiva',
    name: { sanskrit: 'शिव', english: 'Shiva' },
    type: 'Trimurti',
    role: 'The Destroyer, The Transformer',
    significance: 'One of the principal deities of Hinduism, part of the Trimurti with Brahma and Vishnu. Known as Mahadeva.',
    associatedTexts: ['Puranas', 'Vedas', 'Other'],
    lineage: 'Adi-Deva (Primordial God), Self-manifested',
    stories: [
      { title: 'Tandava Dance', summary: 'The cosmic dance of creation and destruction.' },
      { title: 'Marriage to Parvati', summary: 'His divine union with Goddess Parvati.' },
      { title: 'Drinking Halahala Poison', summary: 'Saved the universe by consuming the poison churned from the cosmic ocean, turning his throat blue (Neelakantha).' },
    ],
    symbolism: 'Trishula (trident), Damaru (drum), Crescent moon, Serpent Vasuki. Represents asceticism, meditation, and cosmic energy.',
    teachings: ['Path of meditation and renunciation', 'Overcoming ego', 'The cyclical nature of existence'],
    relatedTemples: [{ name: 'Kashi Vishwanath Temple', location: 'Varanasi' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Often depicted as an ascetic, meditating, or as Nataraja (Lord of Dance).' }],
    imageUrl: "https://i.pinimg.com/736x/6e/ae/06/6eae061cd6587e7306a84f670ea892c4.jpg",
    imageAiHint: "shiva meditation trishula",
    linkedCharacters: [
      { id: 'parvati', name: 'Parvati', relationship: 'Wife' },
      { id: 'ganesha', name: 'Ganesha', relationship: 'Son' },
      { id: 'kartikeya', name: 'Kartikeya', relationship: 'Son' },
    ],
    yuga: 'All Yugas',
    region: 'Kailash',
    gender: 'Male',
    nature: 'Neutral',
  },
  {
    id: 'lakshmi',
    name: { sanskrit: 'लक्ष्मी', english: 'Lakshmi' },
    type: 'Devi',
    role: 'Goddess of Wealth, Fortune, Prosperity, and Beauty',
    significance: 'Consort of Vishnu. Represents auspiciousness and abundance.',
    associatedTexts: ['Puranas', 'Vedas', 'Other'],
    lineage: 'Emerged from Samudra Manthan.',
    stories: [
      { title: 'Emergence from Samudra Manthan', summary: 'Appeared from the cosmic ocean during its churning.' },
      { title: 'Consort of Vishnu', summary: 'Accompanies Vishnu in all his incarnations.' },
    ],
    symbolism: 'Lotus, Elephants, Gold coins. Represents material and spiritual prosperity.',
    relatedTemples: [{ name: 'Mahalakshmi Temple', location: 'Mumbai' }],
    depictions: [{ medium: 'Paintings, Sculptures', description: 'Beautiful woman on a lotus, often with elephants.' }],
    imageUrl: 'https://i.pinimg.com/736x/fd/2b/cb/fd2bcbbdc0a22c84590cee754237c9dc.jpg',
    imageAiHint: 'goddess lakshmi lotus gold',
    linkedCharacters: [{ id: 'vishnu', name: 'Vishnu', relationship: 'Consort' }],
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
  },
  {
    id: 'parvati',
    name: { sanskrit: 'पार्वती', english: 'Parvati' },
    type: 'Devi',
    role: 'Goddess of Love, Fertility, Devotion; Divine Mother',
    significance: 'Consort of Shiva, mother of Ganesha and Kartikeya. Represents divine feminine power (Shakti).',
    associatedTexts: ['Puranas', 'Other'],
    lineage: 'Daughter of Himavan. Reincarnation of Sati.',
    stories: [
      { title: 'Tapasya for Shiva', summary: 'Performed severe austerities to win Shiva.' },
      { title: 'Mother of Ganesha and Kartikeya', summary: 'Nurtured Ganesha and Kartikeya.' },
    ],
    symbolism: 'Represents divine strength, love, and devotion.',
    relatedTemples: [{ name: 'Kashi Vishalakshi Temple', location: 'Varanasi' }],
    depictions: [{ medium: 'Paintings, Sculptures', description: 'With Shiva, or as a motherly figure. Fierce forms like Durga/Kali.' }],
    imageUrl: 'https://i.pinimg.com/736x/96/ec/e0/96ece030d5ef9e4f025e80eee5e40efa.jpg',
    imageAiHint: 'goddess parvati shiva',
    linkedCharacters: [
      { id: 'shiva', name: 'Shiva', relationship: 'Consort' },
      { id: 'ganesha', name: 'Ganesha', relationship: 'Son' },
      { id: 'kartikeya', name: 'Kartikeya', relationship: 'Son' },
    ],
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
  },
  {
    id: 'durga',
    name: { sanskrit: 'दुर्गा', english: 'Durga' },
    type: 'Devi',
    role: 'Warrior Goddess, The Invincible One',
    significance: 'A principal form of the Goddess, combating evils and demonic forces.',
    associatedTexts: ['Puranas', 'Other'],
    lineage: 'Manifestation of Adi Parashakti or Parvati.',
    stories: [
      { title: 'Slaying Mahishasura', summary: 'Defeated the buffalo demon Mahishasura.' },
      { title: 'Battle with Shumbha and Nishumbha', summary: 'Defeated demon brothers Shumbha and Nishumbha.' }
    ],
    symbolism: 'Rides a lion or tiger, wields multiple weapons. Represents protective power.',
    relatedTemples: [{ name: 'Vaishno Devi Temple', location: 'Jammu and Kashmir' }],
    depictions: [{ medium: 'Paintings, Sculptures', description: 'Multiple arms, riding lion/tiger, slaying Mahishasura.' }],
    imageUrl: 'https://i.pinimg.com/736x/e8/81/c4/e881c42a9fa3c51241df3c631f296d3d.jpg',
    imageAiHint: 'goddess durga lion warrior',
    linkedCharacters: [
      { id: 'shiva', name: 'Shiva', relationship: 'Consort (as Parvati)' },
      { id: 'mahishasura', name: 'Mahishasura', relationship: 'Antagonist (defeated)'},
    ],
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
  },
  {
    id: 'saraswati',
    name: { sanskrit: 'सरस्वती', english: 'Saraswati' },
    type: 'Devi',
    role: 'Goddess of Knowledge, Music, Art, Wisdom, and Learning',
    significance: 'Consort of Brahma, revered for knowledge, arts, and speech (Vach).',
    associatedTexts: ['Vedas', 'Puranas', 'Upanishads'],
    lineage: 'Daughter/Creation of Brahma or independent cosmic force.',
    stories: [
      { title: 'Origin from Brahma', summary: 'Manifested from Brahma for creation through knowledge.' },
      { title: 'Bestower of Wisdom', summary: 'Grants boons of knowledge and artistic skill.' },
    ],
    symbolism: 'Veena, White Saree, Swan/Peacock, Lotus, Book. Represents purity and creativity.',
    relatedTemples: [{ name: 'Gnana Saraswati Temple', location: 'Basar, Telangana' }],
    depictions: [{ medium: 'Paintings, Sculptures', description: 'Beautiful woman in white on a lotus or swan/peacock, holding veena and book.' }],
    imageUrl: 'https://i.pinimg.com/736x/04/e6/76/04e6763e3eb403facc436af89b4f78de.jpg',
    imageAiHint: 'indian goddess veena',
    linkedCharacters: [{ id: 'brahma', name: 'Brahma', relationship: 'Consort' }],
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Good',
  },
  {
    id: 'hanuman',
    name: { sanskrit: 'हनुमान्', english: 'Hanuman' },
    type: 'Deva',
    role: 'Devotee of Rama, Symbol of Strength and Devotion',
    significance: 'Key figure in Ramayana, known for unwavering devotion to Rama and immense strength.',
    associatedTexts: ['Ramayana', 'Puranas', 'Mahabharata'],
    lineage: 'Son of Vayu and Anjana. Rudra Avatar in some traditions.',
    stories: [
      { title: 'Leap to Lanka', summary: 'Leaped across the ocean to find Sita.' },
      { title: 'Bringing Sanjeevani Booti', summary: 'Brought a mountain with the life-saving herb for Lakshmana.' },
    ],
    symbolism: 'Mace, Devotion, Strength, Humility. Represents selfless service.',
    relatedTemples: [{ name: 'Sankat Mochan Hanuman Temple', location: 'Varanasi' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Strong Vanara with a mace, bowing to Rama or carrying a mountain.' }],
    imageUrl: 'https://i.pinimg.com/736x/c0/0e/1d/c00e1de1b0d81978281c8ad06c7bf441.jpg',
    imageAiHint: 'indian deity monkey',
    linkedCharacters: [
      { id: 'rama', name: 'Rama', relationship: 'Master, Deity' },
    ],
    yuga: 'Treta Yuga',
    region: 'Kishkindha',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'brahma', // Already in TRIMURTI_CATEGORY_DATA, will be updated if different
    name: { sanskrit: 'ब्रह्मा', english: 'Brahma' },
    type: 'Trimurti',
    role: 'The Creator',
    significance: 'One of the Trimurti, responsible for creation. Less actively worshipped.',
    associatedTexts: ['Puranas', 'Vedas', 'Other'],
    lineage: 'Self-born from Vishnu\'s navel lotus or cosmic egg.',
    stories: [
      { title: 'Creation of the Universe', summary: 'Created cosmos, Prajapatis, and Vedas.' },
    ],
    symbolism: 'Four heads, Lotus, Kamandalu, Vedas. Represents cosmic mind.',
    relatedTemples: [{ name: 'Brahma Temple', location: 'Pushkar, Rajasthan' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Four faces, four arms, holding scriptures, rosary, water pot, lotus.' }],
    imageUrl: "https://i.pinimg.com/736x/e1/5a/95/e15a95784c4f324451e8baecbfdd4282.jpg",
    imageAiHint: "brahma four faces swan",
    linkedCharacters: [
      { id: 'saraswati', name: 'Saraswati', relationship: 'Consort/Daughter' },
      { id: 'vishnu', name: 'Vishnu', relationship: 'Fellow Trimurti' },
      { id: 'shiva', name: 'Shiva', relationship: 'Fellow Trimurti' },
    ],
    yuga: 'All Yugas',
    region: 'Brahmaloka',
    gender: 'Male',
    nature: 'Neutral',
  },
  {
    id: 'vishnu', // Already in TRIMURTI_CATEGORY_DATA
    name: { sanskrit: 'विष्णु', english: 'Vishnu' },
    type: 'Trimurti',
    role: 'The Preserver, The Protector',
    significance: 'One of the Trimurti, maintains cosmic order (Dharma). Incarnates as Avatars.',
    associatedTexts: ['Puranas', 'Vedas', 'Upanishads', 'Ramayana', 'Mahabharata'],
    lineage: 'Adi-Deva, Self-manifested. Resides in Vaikuntha.',
    stories: [
      { title: 'The Dashavataras', summary: 'Ten primary incarnations to restore Dharma.' },
      { title: 'Sheshashayana', summary: 'Rests on cosmic serpent Ananta Shesha.' },
    ],
    symbolism: 'Four arms, Kaumodaki, Panchajanya, Sudarshana Chakra, Padma. Blue skin. Garuda as vahana.',
    relatedTemples: [{ name: 'Sri Ranganathaswamy Temple', location: 'Srirangam' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Blue skin, four arms, with Lakshmi or on Shesha.' }],
    imageUrl: "https://i.pinimg.com/736x/5b/eb/b7/5bebb7eba704877f1bd9581e41db265b.jpg",
    imageAiHint: "vishnu blue skin chakra",
    linkedCharacters: [
      { id: 'lakshmi', name: 'Lakshmi', relationship: 'Consort' },
    ],
    yuga: 'All Yugas',
    region: 'Vaikuntha',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'parashurama',
    name: { sanskrit: 'परशुराम', english: 'Parashurama' },
    type: 'Avatar',
    role: 'Warrior Sage, Axe-wielder',
    significance: 'Sixth avatar of Vishnu, Brahmin warrior who eradicated arrogant Kshatriyas. Chiranjeevi.',
    associatedTexts: ['Mahabharata', 'Ramayana', 'Puranas'],
    lineage: 'Son of Sage Jamadagni and Renuka.',
    stories: [
      { title: 'Avenging Father\'s Death', summary: 'Killed Kartavirya Arjuna to avenge his father.' },
      { title: 'Encounter with Rama', summary: 'Challenged Rama, later recognizing his divinity.' },
    ],
    symbolism: 'Parashu (axe). Represents righteous anger against injustice.',
    relatedTemples: [{ name: 'Thiruvallam Sree Parasuramaswamy Temple', location: 'Kerala' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Fierce sage with a beard, carrying an axe.' }],
    imageUrl: 'https://i.pinimg.com/736x/01/20/54/0120541f22227d6851a88a6ac838ff9e.jpg',
    imageAiHint: 'indian sage warrior axe',
    linkedCharacters: [{ id: 'vishnu', name: 'Vishnu', relationship: 'Origin Deity' }],
    yuga: 'Treta Yuga',
    region: 'Mahendra Mountains',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'vamana',
    name: { sanskrit: 'वामन', english: 'Vamana' },
    type: 'Avatar',
    role: 'Dwarf Avatar who reclaimed the three worlds',
    significance: 'Fifth avatar of Vishnu, appeared as a dwarf Brahmin to subdue King Bali.',
    associatedTexts: ['Puranas'],
    lineage: 'Son of Sage Kashyapa and Aditi.',
    stories: [
      { title: 'The Three Steps', summary: 'Asked Bali for land measurable by three steps, then grew to cosmic size.' },
    ],
    symbolism: 'Dwarf form, then cosmic Trivikrama form. Power hidden in humility.',
    relatedTemples: [{ name: 'Thrikkakkara Vamana Moorthy Temple', location: 'Kerala' }],
    depictions: [{ medium: 'Sculptures, Paintings', description: 'Small Brahmin boy or giant Trivikrama.' }],
    imageUrl: 'https://i.pinimg.com/736x/10/c1/cf/10c1cf24f5cbdb9277686265d5990f74.jpg',
    imageAiHint: 'indian deity dwarf boy',
    linkedCharacters: [
      { id: 'vishnu', name: 'Vishnu', relationship: 'Origin Deity' },
      { id: 'mahabali', name: 'King Mahabali', relationship: 'Devotee/Antagonist (subdued)' },
    ],
    yuga: 'Treta Yuga',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'vasishtha-muni', 
    name: { sanskrit: 'वसिष्ठ', english: 'Vashistha' },
    type: 'Rishi',
    role: 'Great Sage, Guru of Rama, Saptarishi',
    significance: 'Revered Vedic sage, known for wisdom and as Rajguru of Ikshvaku dynasty.',
    associatedTexts: ['Vedas', 'Ramayana', 'Mahabharata', 'Puranas', 'Other'],
    lineage: 'Manasaputra of Brahma.',
    stories: [
      { title: 'Possessor of Kamadhenu', summary: 'Owned the wish-fulfilling cow, leading to conflict with Vishwamitra.' },
      { title: 'Guru of Rama', summary: 'Provided spiritual education to Rama.' },
    ],
    symbolism: 'Represents ideal Brahminical conduct and wisdom.',
    imageUrl: 'https://i.pinimg.com/736x/7e/19/6c/7e196cbac38347cbe137bbd425c15476.jpg',
    imageAiHint: 'sage vashistha teaching',
    linkedCharacters: [
      { id: 'rama', name: 'Rama', relationship: 'Disciple' },
      { id: 'vishvamitra-muni', name: 'Vishvamitra', relationship: 'Rival Sage' }, // Updated ID
    ],
    yuga: 'All Yugas',
    gender: 'Male',
    nature: 'Good',
  },
   {
    id: 'vishvamitra-muni',
    name: { sanskrit: 'विश्वामित्र', english: 'Vishvamitra' },
    type: 'Rishi',
    role: 'Great Sage, Composer of Gayatri Mantra',
    significance: 'Originally a king (Kaushika), became a Brahmarishi through intense tapasya. Guided Rama.',
    associatedTexts: ['Vedas', 'Ramayana'],
    lineage: 'Son of King Gadhi.',
    stories: [
        { title: 'Conflict with Vashistha', summary: 'Famous rivalry over the divine cow Kamadhenu.' },
        { title: 'Creation of Trishanku Swarga', summary: 'Attempted to send King Trishanku to heaven in his mortal body.' },
    ],
    symbolism: 'Represents the power of tapasya and will. Transformation from Kshatriya to Brahmarishi.',
    imageUrl: 'https://i.pinimg.com/736x/fc/ab/23/fcab23b74ba0463daf2617efbce724b0.jpg',
    imageAiHint: 'sage vishvamitra mantra',
    linkedCharacters: [
      { id: 'rama', name: 'Rama', relationship: 'Disciple' },
      { id: 'vasishtha-muni', name: 'Vashistha', relationship: 'Rival Sage' }, // Updated ID
    ],
    yuga: 'Treta Yuga',
    gender: 'Male',
    nature: 'Good',
  },
  {
    id: 'kali', // From Dasha Mahavidya data
    name: { sanskrit: 'काली', english: 'Kali' },
    type: 'Das Mahavidya',
    role: 'Goddess of Time, Death, and Transformation',
    significance: "Represents ultimate reality beyond time, destruction of ego and ignorance.",
    associatedTexts: ['Puranas', 'Other'],
    lineage: 'Fierce aspect of Adi Parashakti.',
    stories: [
      { title: 'Emergence from Durga\'s Forehead', summary: 'Emerged to drink Raktabija\'s blood.' },
      { title: 'Dance of Destruction', summary: 'Frenzied dance calmed by Shiva underfoot.' },
    ],
    symbolism: "Dark-skinned, fierce, garland of skulls, tongue out. Destruction of ego.",
    relatedTemples: [{ name: 'Kalighat Temple', location: 'Kolkata' }],
    imageUrl: 'https://i.pinimg.com/736x/fb/cc/d8/fbccd871f595cd132555353036d953f2.jpg',
    imageAiHint: 'indian goddess fierce dark',
    linkedCharacters: [{ id: 'shiva', name: 'Shiva', relationship: 'Consort' }],
    yuga: 'All Yugas',
    gender: 'Female',
    nature: 'Neutral',
  },
  {
    id: 'avatar-veerabhadra',
    name: { sanskrit: 'वीरभद्र', english: 'Veerabhadra' },
    type: 'Avatar', 
    role: 'Fierce Manifestation of Shiva',
    significance: 'Emanation of Shiva\'s wrath, destroyed Daksha\'s Yajna.',
    associatedTexts: ['Puranas', 'Shiva Purana'],
    lineage: 'Born from Shiva\'s matted hair.',
    stories: [
      { title: 'Destruction of Daksha\'s Yajna', summary: 'Avenged Sati\'s death by destroying Daksha\'s sacrifice.' },
    ],
    symbolism: 'Multiple arms, fearsome appearance. Represents Shiva\'s righteous fury.',
    relatedTemples: [{ name: 'Virabhadra Temple', location: 'Lepakshi, Andhra Pradesh' }],
    imageUrl: 'https://i.pinimg.com/736x/b5/3e/c0/b53ec0f6d39fbd3a12b1b2c4437b2bcf.jpg', 
    imageAiHint: 'indian warrior deity fierce',
    linkedCharacters: [{ id: 'shiva', name: 'Shiva', relationship: 'Origin Deity / Self' }],
    yuga: 'Satya Yuga',
    gender: 'Male',
    nature: 'Fierce',
  },
];

// Processing logic to build the final character list
const allCharactersMapProcessing = new Map<string, Character>();

// Add initial characters to map
ALL_CHARACTERS_INITIAL.forEach(char => {
  if (!allCharactersMapProcessing.has(char.id)) {
    allCharactersMapProcessing.set(char.id, char);
  }
});

// Helper function to add characters to the map if they don't exist
const addCharacterToMap = (character: Character) => {
    if (!allCharactersMapProcessing.has(character.id)) {
        allCharactersMapProcessing.set(character.id, character);
    }
};

// Map and add characters from each category data source
DEMON_CATEGORY_DATA.notable_demons.forEach(item => addCharacterToMap(mapDemonToCharacter(item)));
ASURA_CATEGORY_DATA.notable_asuras.forEach(item => addCharacterToMap(mapAsuraToCharacter(item)));
RAKSHASA_CATEGORY_DATA.notable_rakshasas.forEach(item => addCharacterToMap(mapRakshasaToCharacter(item)));
DAITYA_CATEGORY_DATA.notable_daityas.forEach(item => addCharacterToMap(mapDaityaToCharacter(item)));
DANAVA_CATEGORY_DATA.notable_danavas.forEach(item => addCharacterToMap(mapDanavaToCharacter(item)));
YAKSHA_CATEGORY_DATA.notable_figures.forEach(item => addCharacterToMap(mapYakshaToCharacter(item)));
DEVI_CATEGORY_DATA.major_forms.forEach(item => addCharacterToMap(mapDeviFormToCharacter(item, 'Devi')));
DEVI_CATEGORY_DATA.avatars_and_forms.forEach(item => addCharacterToMap(mapDeviFormToCharacter(item, 'Devi')));
DEVA_CATEGORY_DATA.major_devas.forEach(item => addCharacterToMap(mapMajorDevaToCharacter(item)));
TRIMURTI_CATEGORY_DATA.members.forEach(item => addCharacterToMap(mapTrimurtiMemberToCharacter(item)));
DASHAVATAR_CATEGORY_DATA.avatars.forEach(item => addCharacterToMap(mapDashavatarToCharacter(item)));
NAVDURGA_CATEGORY_DATA.goddesses.forEach(item => addCharacterToMap(mapNavdurgaToCharacter(item)));
SAPTARISHI_CATEGORY_DATA.rishis.forEach(item => addCharacterToMap(mapSaptarishiToCharacter(item)));
PRAJAPATI_CATEGORY_DATA.notable_prajapatis.forEach(item => addCharacterToMap(mapPrajapatiToCharacter(item)));
APSARAS_CATEGORY_DATA.notable_apsaras.forEach(item => addCharacterToMap(mapApsaraToCharacter(item)));
GANDHARVA_CATEGORY_DATA.notable_gandharvas.forEach(item => addCharacterToMap(mapGandharvaToCharacter(item)));
EKADASHA_RUDRA_CATEGORY_DATA.avatars.forEach(item => addCharacterToMap(mapEkadashaRudraToCharacter(item)));
MAHADEVA_AVATARS_CATEGORY_DATA.avatars.forEach(item => addCharacterToMap(mapMahadevaAvatarToCharacter(item)));
AVATAR_CATEGORY_DATA.avatars.forEach(item => addCharacterToMap(mapGeneralAvatarToCharacter(item)));
NAVAGRAHA_CATEGORY_DATA.navagrahas.forEach(item => addCharacterToMap(mapNavagrahaToCharacter(item)));
MUNI_CATEGORY_DATA.munis.forEach(item => addCharacterToMap(mapMuniToCharacter(item)));
KING_CATEGORY_DATA.kings.forEach(item => addCharacterToMap(mapKingToCharacter(item)));
WARRIOR_CATEGORY_DATA.warriors.forEach(item => addCharacterToMap(mapWarriorToCharacter(item)));
NAGA_CATEGORY_DATA.notable_nagas.forEach(item => addCharacterToMap(mapNagaToCharacter(item)));
DASHA_MAHAVIDYA_CATEGORY_DATA.goddesses_overview.forEach(item => addCharacterToMap(mapDashaMahavidyaToCharacter(item)));


// Exported functions that use the populated map
export function getAllCharacters(): Character[] {
  return Array.from(allCharactersMapProcessing.values());
}

export function getCharacterById(id: string): Character | undefined {
  return allCharactersMapProcessing.get(id);
}

// Re-export category data files if they are needed directly by other pages
export { DASHA_MAHAVIDYA_CATEGORY_DATA };
export { DEMON_CATEGORY_DATA };
export { ASURA_CATEGORY_DATA };
export { RAKSHASA_CATEGORY_DATA };
export { DAITYA_CATEGORY_DATA };
export { DANAVA_CATEGORY_DATA };
export { YAKSHA_CATEGORY_DATA };
export { DEVI_CATEGORY_DATA };
export { DEVA_CATEGORY_DATA };
export { TRIMURTI_CATEGORY_DATA };
export { DASHAVATAR_CATEGORY_DATA };
export { NAVDURGA_CATEGORY_DATA };
export { SAPTARISHI_CATEGORY_DATA };
export { PRAJAPATI_CATEGORY_DATA };
export { APSARAS_CATEGORY_DATA };
export { GANDHARVA_CATEGORY_DATA };
export { EKADASHA_RUDRA_CATEGORY_DATA };
export { MAHADEVA_AVATARS_CATEGORY_DATA };
export { AVATAR_CATEGORY_DATA };
export { NAVAGRAHA_CATEGORY_DATA };
export { PISHACHA_CATEGORY_DATA };
export { MUNI_CATEGORY_DATA };
export { KING_CATEGORY_DATA };
export { WARRIOR_CATEGORY_DATA };
export { OTHER_CELESTIAL_BEINGS_CATEGORY_DATA };
export { NAGA_CATEGORY_DATA };


