const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://masangri.github.io',
  title: 'MJ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mas',
  role: 'Software Development. Technical Art.',
  description:
    'Coding solutions in digital media & entertinament and Web3.',
  resumeCG: 'https://frentity.com/shared/Masaki_Jeffrey_Resume_CG.pdf',
  resumeWeb3: 'https://frentity.com/shared/Masaki_Jeffrey_Resume_Web3.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/masakijeffrey/',
    github: 'https://github.com/Masangri/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'NFT Blender',
    description:
      'A growing set of useful tools for Blender that utilizes the full scope of Python 3 beyond just what ships with Blender',
    stack: ['Python', 'Qt'],
    sourceCode: 'https://github.com/Masangri/nft-blender',
    livePreview: 'https://masangri.github.io/nft-blender/',
  },
  {
    name: 'ERC-1155 NFT Project Template for Polygon',
    description:
      'Smart contract template project for NFT editions (ERC-1155) with features for Polygon (EVM side-chain).',
    stack: ['Node', 'Solidity'],
    sourceCode: 'https://github.com/Masangri/erc-1155-nft-project-template-for-polygon',
    livePreview: 'https://testnets.opensea.io/collection/blender-frens',
  },
  // {
  //   name: '"D\'rivd\'z" ERC-1155 NFT Collection (Deployment Code)',
  //   description:
  //     'In Progress.',
  //   stack: ['Node', 'Solidity'],
  //   sourceCode: 'https://github.com/Masangri/drivdz-erc-1155-nft-collection',
  //   livePreview: '',
  // },
  {
    name: 'Misc. Web3 Bootcamp Projects',
    description:
      'Ethereum & Solana testnet projects for various Buildspace coding bootcamps.',
    stack: ['Node', 'TypeScript', 'React', 'Rust', 'Solidity'],
    sourceCode: 'https://github.com/stars/Masangri/lists/coding-bootcamp-projects',
    livePreview: 'https://buildspace-sol-nft-candymachine-frontend.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'CSS',
  'Git',
  'HTML',
  'JavaScript',
  'Python',
  'Qt',
  'React',
  'Solidity',
  'TypeScript',
]

const skillsDCC = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'After Effects',
  'Blender',
  'Maya',
  'Nuke',
  'Photoshop',
  'Substance',
  'Unity',
  'Unreal Engine',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'masaki.jeffrey@frentity.com',
}

export { header, about, projects, skills, skillsDCC, contact }
