export default {
    name: 'Company',
    children: [
        {
            name:  <a href="/contact">Consulting</a>,
            attributes: {
                department: 'Production',
            },
            // children: [
            //     {
            //         name: 'Foreman',
            //         attributes: {
            //             department: 'Fabrication',
            //         },
            //         children: [
            //             {
            //                 name: 'Worker',
            //             },
            //         ],
            //     },
            //     {
            //         name: 'Foreman',
            //         attributes: {
            //             department: 'Assembly',
            //         },
            //         children: [
            //             {
            //                 name: 'Worker',
            //             },
            //         ],
            //     },
            // ],
        },

        {
            name:  'Development',
            // attributes: {
            //     department: 'Production',
            // },
            children: [
                {
                    name: <a href="/web-app">Web Application</a>,
                    // attributes: {
                    //     department: 'Fabrication',
                    // },
                    // children: [
                    //     {
                    //         name: 'Worker',
                    //     },
                    // ],
                },
                {
                    name:  <a href="/#">Site</a>,
                    // attributes: {
                    //     department: 'Assembly',
                    // },
                    children: [
                        {
                            name: <a href="/#">Landing page</a>,
                        },

                        {
                            name: <a href="/#">Business site</a>,
                        },
                        {
                            name: <a href="/#">E-commerce site</a>,
                        },
                    ],
                },
                {
                    name: <a href="/web-app">MVP</a>,
                    attributes: {
                        department: 'business idea testing',
                    },
                    // children: [
                    //     {
                    //         name: 'Worker',
                    //     },
                    // ],
                },
            ],
        },

        {
            name:  'Web Marketing',
            children: [
                {
                    name: 'SEO Promotion',
                },
                {
                    name: 'SMM Marketing',
                },
                {
                    name: 'Messengers Promotion',
                },
                {
                    name: 'Localisation',
                },
                {
                    name: 'Copywriting',
                },
            ],
        },
    ],
}