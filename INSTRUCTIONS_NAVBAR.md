# Instructions pour intégrer la Navbar Moderne

## Problème
Le fichier `assets/index.js` est un bundle React minifié, ce qui rend les modifications directes très difficiles.

## Solution : Reconstruire le projet avec le code source

### Option 1 : Si vous avez le code source original

1. Localisez le fichier source de la navbar (probablement dans `src/components/`)
2. Remplacez le composant de la navbar par le code ci-dessous

### Option 2 : Reconstruction complète (Recommandé)

Voici le code source moderne de la navbar à intégrer dans votre projet React :

```jsx
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const scrollToDevis = () => {
        document.getElementById("devis")?.scrollIntoView({
            behavior: "smooth"
        });
    };
    
    return (
        <>
            {/* Header principal */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo et nom */}
                        <div className="flex items-center gap-3">
                            <img 
                                src="/assets/softtt.PNG" 
                                alt="Soft Transports" 
                                className="w-14 h-14 object-contain hover:scale-105 transition-transform cursor-pointer"
                            />
                            <div className="hidden sm:block">
                                <div className="font-bold text-xl text-secondary tracking-tight">
                                    SOFT TRANSPORTS
                                </div>
                                <div className="text-xs text-muted-foreground font-medium">
                                    Expert Déménagement Paris & Île-de-France
                                </div>
                            </div>
                        </div>
                        
                        {/* Menu navigation desktop */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <a 
                                href="#services" 
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                <span>
                                    Nos Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                </span>
                            </a>
                            <a 
                                href="#avantages" 
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                <span>
                                    Nos Avantages
                                    <span className="absolute -bottom-1 left-0 w-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                </span>
                            </a>
                            <a 
                                href="#zones" 
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                <span>
                                    Zones d'Intervention
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                </span>
                            </a>
                            <a 
                                href="#contact" 
                                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                            >
                                <span>
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                                </span>
                            </a>
                        </nav>
                        
                        {/* Boutons d'action */}
                        <div className="flex items-center gap-3">
                            {/* Bouton téléphone */}
                            <Button
                                variant="outline"
                                size="sm"
                                className="hidden md:flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                                asChild
                            >
                                <a href="tel:+33758562250">
                                    <Phone className="h-4 w-4" />
                                    <span className="font-semibold">07 58 56 22 50</span>
                                </a>
                            </Button>
                            
                            {/* Bouton devis */}
                            <Button
                                size="sm"
                                onClick={scrollToDevis}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all"
                            >
                                Devis Gratuit
                            </Button>
                            
                            {/* Bouton menu mobile */}
                            <button
                                className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Menu mobile */}
            {mobileMenuOpen && (
                <div className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
                    <nav className="container mx-auto px-4 py-6">
                        <div className="flex flex-col gap-4">
                            <a 
                                href="#services" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                            >
                                Nos Services
                            </a>
                            <a 
                                href="#avantages" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                            >
                                Nos Avantages
                            </a>
                            <a 
                                href="#zones" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                            >
                                Zones d'Intervention
                            </a>
                            <a 
                                href="#contact" 
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 px-4 hover:bg-muted rounded-md"
                            >
                                Contact
                            </a>
                            <div className="pt-4 border-t border-border">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="w-full"
                                    asChild
                                >
                                    <a href="tel:+33758562250">
                                        <Phone className="mr-2 h-5 w-5" />
                                        07 58 56 22 50
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Navbar;
```

## Caractéristiques de la nouvelle navbar :

✅ **Design moderne et professionnel**
- Effet backdrop blur pour un look premium
- Ombre subtile pour la profondeur
- Animations fluides sur les liens

✅ **Menu de navigation complet**
- Liens vers : Services, Avantages, Zones, Contact
- Effet de soulignement animé au survol
- Navigation smooth scroll

✅ **Responsive**
- Menu hamburger pour mobile/tablette
- Menu déroulant animé sur mobile
- Adapté à toutes les tailles d'écran

✅ **Boutons d'action optimisés**
- Bouton téléphone avec icône
- Bouton "Devis Gratuit" mis en avant
- Effets hover professionnels

✅ **SEO optimisé**
- Texte descriptif : "Expert Déménagement Paris & Île-de-France"
- Structure sémantique HTML5
- Accessibilité améliorée

## Pour rebuilder votre projet :

```bash
# Dans le dossier de votre projet source
npm install
npm run build
```

## Besoin d'aide ?

Si vous avez besoin d'aide pour intégrer cette navbar ou rebuilder le projet, contactez-moi !
