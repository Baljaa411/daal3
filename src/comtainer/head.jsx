// import React from 'react';
// import {
//     createStyles,
//     Menu,
//     Center,
//     Header,
//     Container,
//     Group,
//     Button,
//     Burger,
//   } from '@mantine/core';
//   import { useDisclosure } from '@mantine/hooks';
//   import { IconChevronDown } from '@tabler/icons';
//   import { MantineLogo } from '@mantine/ds';
//   const HEADER_HEIGHT = 60;
//   const Head = () =>{
//     return(
               
//                 (interface (HeaderActionProps) ){
//                     links: { link: string; label: string; links: { link: string; label: string }[] }[];
//                 }
                
//                 export function HeaderAction({ links }: (HeaderActionProps)) {
//                     const { classes } = useStyles();
//                     const [opened, { toggle }] = useDisclosure(false);
//                     const items = links.map((link) => {
//                     const menuItems = link.links?.map((item) => (
//                         <Menu.Item key={item.link}>{item.label}</Menu.Item>
//                     ));
                
//                     if (menuItems) {
//                         return (
//                         <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
//                             <Menu.Target>
//                             <a
//                                 href={link.link}
//                                 className={classes.link}
//                                 onClick={(event) => event.preventDefault()}
//                             >
//                                 <Center>
//                                 <span className={classes.linkLabel}>{link.label}</span>
//                                 <IconChevronDown size={12} stroke={1.5} />
//                                 </Center>
//                             </a>
//                             </Menu.Target>
//                             <Menu.Dropdown>{menuItems}</Menu.Dropdown>
//                         </Menu>
//                         );
//                     }
                
//                     return (
//                         <a
//                         key={link.label}
//                         href={link.link}
//                         className={classes.link}
//                         onClick={(event) => event.preventDefault()}
//                         >
//                         {link.label}
//                         </a>
//                     );
//                     });
                
//                     return (
//                     <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
//                         <Container className={classes.inner} fluid>
//                         <Group>
//                             <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
//                             <MantineLogo size={28} />
//                         </Group>
//                         <Group spacing={5} className={classes.links}>
//                             {items}
//                         </Group>
//                         <Button radius="xl" sx={{ height: 30 }}>
//                             Get early access
//                         </Button>
//                         </Container>
//                     </Header>
//                     );
//                 }
//     )
// }

