// Navbar Moderne pour Soft Transports
// Remplacer la fonction qk dans index.js (lignes 17861-17913)

const NavbarModerne = () => {
    const scrollToDevis = () => {
        var e;
        (e = document.getElementById("devis")) == null || e.scrollIntoView({
            behavior: "smooth"
        })
    };
    
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    
    return React.createElement(React.Fragment, null, [
        // Header principal
        React.createElement("header", {
            key: "header",
            className: "fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
        }, 
            React.createElement("div", {
                className: "container mx-auto px-4"
            },
                React.createElement("div", {
                    className: "flex items-center justify-between h-20"
                }, [
                    // Logo et nom
                    React.createElement("div", {
                        key: "logo",
                        className: "flex items-center gap-3"
                    }, [
                        React.createElement("img", {
                            key: "img",
                            src: "/assets/softtt.PNG",
                            alt: "Soft Transports",
                            className: "w-14 h-14 object-contain hover:scale-105 transition-transform cursor-pointer"
                        }),
                        React.createElement("div", {
                            key: "text",
                            className: "hidden sm:block"
                        }, [
                            React.createElement("div", {
                                key: "title",
                                className: "font-bold text-xl text-secondary tracking-tight"
                            }, "SOFT TRANSPORTS"),
                            React.createElement("div", {
                                key: "subtitle",
                                className: "text-xs text-muted-foreground font-medium"
                            }, "Expert Déménagement Paris & Île-de-France")
                        ])
                    ]),
                    
                    // Menu navigation desktop
                    React.createElement("nav", {
                        key: "nav",
                        className: "hidden lg:flex items-center gap-8"
                    }, [
                        React.createElement("a", {
                            key: "services",
                            href: "#services",
                            className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        }, 
                            React.createElement("span", null, [
                                "Nos Services",
                                React.createElement("span", {
                                    key: "underline",
                                    className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                })
                            ])
                        ),
                        React.createElement("a", {
                            key: "avantages",
                            href: "#avantages",
                            className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        }, 
                            React.createElement("span", null, [
                                "Nos Avantages",
                                React.createElement("span", {
                                    key: "underline",
                                    className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                })
                            ])
                        ),
                        React.createElement("a", {
                            key: "zones",
                            href: "#zones",
                            className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        }, 
                            React.createElement("span", null, [
                                "Zones d'Intervention",
                                React.createElement("span", {
                                    key: "underline",
                                    className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                })
                            ])
                        ),
                        React.createElement("a", {
                            key: "contact",
                            href: "#contact",
                            className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                        }, 
                            React.createElement("span", null, [
                                "Contact",
                                React.createElement("span", {
                                    key: "underline",
                                    className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                })
                            ])
                        )
                    ]),
                    
                    // Boutons d'action
                    React.createElement("div", {
                        key: "actions",
                        className: "flex items-center gap-3"
                    }, [
                        // Bouton téléphone
                        React.createElement("a", {
                            key: "phone",
                            href: "tel:+33758562250",
                            className: "hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-border rounded-md hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                        }, [
                            React.createElement("svg", {
                                key: "icon",
                                className: "h-4 w-4",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                            }, 
                                React.createElement("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                })
                            ),
                            React.createElement("span", { key: "text" }, "07 58 56 22 50")
                        ]),
                        
                        // Bouton devis
                        React.createElement("button", {
                            key: "devis",
                            onClick: scrollToDevis,
                            className: "px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-md hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
                        }, "Devis Gratuit"),
                        
                        // Bouton menu mobile
                        React.createElement("button", {
                            key: "menu-btn",
                            className: "lg:hidden p-2 hover:bg-muted rounded-md transition-colors",
                            onClick: () => setMobileMenuOpen(!mobileMenuOpen)
                        }, 
                            React.createElement("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                            }, 
                                mobileMenuOpen 
                                    ? React.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    })
                                    : React.createElement("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    })
                            )
                        )
                    ])
                ])
            )
        ),
        
        // Menu mobile
        mobileMenuOpen && React.createElement("div", {
            key: "mobile-menu",
            className: "fixed top-20 left-0 right-0 z-40 lg:hidden bg-background/98 backdrop-blur-md border-b border-border shadow-lg"
        }, 
            React.createElement("nav", {
                className: "container mx-auto px-4 py-6"
            },
                React.createElement("div", {
                    className: "flex flex-col gap-4"
                }, [
                    React.createElement("a", {
                        key: "m-services",
                        href: "#services",
                        onClick: () => setMobileMenuOpen(false),
                        className: "text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                    }, "Nos Services"),
                    React.createElement("a", {
                        key: "m-avantages",
                        href: "#avantages",
                        onClick: () => setMobileMenuOpen(false),
                        className: "text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                    }, "Nos Avantages"),
                    React.createElement("a", {
                        key: "m-zones",
                        href: "#zones",
                        onClick: () => setMobileMenuOpen(false),
                        className: "text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                    }, "Zones d'Intervention"),
                    React.createElement("a", {
                        key: "m-contact",
                        href: "#contact",
                        onClick: () => setMobileMenuOpen(false),
                        className: "text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                    }, "Contact"),
                    React.createElement("div", {
                        key: "m-phone",
                        className: "pt-4 border-t border-border"
                    },
                        React.createElement("a", {
                            href: "tel:+33758562250",
                            className: "flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold border border-border rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
                        }, [
                            React.createElement("svg", {
                                key: "icon",
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24"
                            }, 
                                React.createElement("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                })
                            ),
                            React.createElement("span", { key: "text" }, "07 58 56 22 50")
                        ])
                    )
                ])
            )
        )
    ]);
};

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavbarModerne;
}
