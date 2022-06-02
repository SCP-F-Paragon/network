/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  codeofEthics: [
    {
      type: 'category',
      label: 'Code of Ethics',
      collapsible: false,
      collapsed: false,
      items: [
        'coe/introduction',
        'coe/security_clearances',
        'coe/chain_of_command',
        {
          type: 'category',
          label: 'Conduct Policies',
          items: [
            {
              type: 'autogenerated',
              dirName: 'coe/conduct',
            },
          ]
        }
        // 'supreme/information_security',
        // {
        //   type: 'category',
        //   label: 'Miscellaneous Information',
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'supreme/miscellaneous_information',
        //     },
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Foundation Policies',
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'supreme/foundation_policies',
        //     },
        //   ]
        // },
        // 'supreme/conclusion'
      ]
    }
  ],
  departments: [
    {
      type: 'category',
      label: 'Department Guidelines',
      collapsible: false,
      collapsed: false,
      items: [
        'departments/introduction',
        {
          type: 'category',
          label: 'Manufacturing Department',
          items: [
            {
              type: 'autogenerated',
              dirName: 'departments/manufacturing',
            },
          ]
        },{
          type: 'category',
          label: 'Security Department',
          items: [
            {
              type: 'autogenerated',
              dirName: 'departments/security',
            },
          ]
        },
        // 'supreme/information_security',
        // {
        //   type: 'category',
        //   label: 'Miscellaneous Information',
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'supreme/miscellaneous_information',
        //     },
        //   ]
        // },
        // {
        //   type: 'category',
        //   label: 'Foundation Policies',
        //   items: [
        //     {
        //       type: 'autogenerated',
        //       dirName: 'supreme/foundation_policies',
        //     },
        //   ]
        // },
        // 'supreme/conclusion'
      ]
    }
  ]
};

module.exports = sidebars;