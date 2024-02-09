import pages from 'src/config/pages' // Get Pages from config

//E-commerce
export default [
  {
    title: 'ilocations.cms.sidebar.adminGroup',
    icon: 'fa-light fa-earth-americas',
    children: [
      pages.qlocations.countries,
      pages.qlocations.provinces,
      pages.qlocations.cities,
      pages.qlocations.neighborhoods,
      pages.qlocations.polygons,
      pages.qlocations.geozones
    ]
  }
]
