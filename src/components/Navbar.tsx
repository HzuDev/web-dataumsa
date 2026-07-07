import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiExternalLink } from "react-icons/fi";

export const RoundedDrawerNavExample = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="bg-bg-main font-display text-text-main">
            <RoundedDrawerNav
                links={[
                    {
                        title: "Inicio",
                        href: "/"
                    },
                    {
                        title: "La Plataforma",
                        sublinks: [
                            {
                                title: "Características",
                                href: "/la-plataforma/caracteristicas",
                            },
                            {
                                title: "Comparativa",
                                href: "/la-plataforma/comparativa",
                            },
                            {
                                title: "Casos de Uso",
                                href: "/la-plataforma/casos-de-uso",
                            },
                        ],
                    },
                    {
                        title: "Documentación",
                        href: "/docs",
                        target: "_blank",
                        isExternal: true
                    },
                    {
                        title: "App Móvil",
                        sublinks: [
                            {
                                title: "DataUMSA Collect",
                                href: "/app-movil/dataumsa-collect",
                            },
                            {
                                title: "Descargas",
                                href: "/app-movil/descargas",
                            },
                        ],
                    },
                    {
                        title: "Sobre DataUMSA",
                        sublinks: [
                            {
                                title: "Historia",
                                href: "/sobre-dataumsa/historia",
                            },
                            {
                                title: "Equipo e Institucional",
                                href: "/sobre-dataumsa/equipo-institucional",
                            },
                        ],
                    },
                ]}
                navBackground="bg-bg-main"
                bodyBackground="bg-transparent"
            >
                {children}
            </RoundedDrawerNav>
        </div>
    );
};

type LinkType = {
    title: string;
    href?: string;
    sublinks?: { title: string; href: string }[];
    target?: string;
    isExternal?: boolean;
};

const RoundedDrawerNav = ({
    children,
    navBackground,
    bodyBackground,
    links,
}: {
    navBackground: string;
    bodyBackground: string;
    children?: React.ReactNode;
    links: LinkType[];
}) => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const activeSublinks = useMemo(() => {
        if (!hovered) return [];
        const link = links.find((l) => l.title === hovered);

        return link && link.sublinks ? link.sublinks : [];
    }, [hovered, links]);

    return (
        <>
            <nav
                onMouseLeave={() => setHovered(null)}
                className={`sticky top-0 z-50 px-6 py-4 border-b border-border transition-colors duration-300 ${(hovered || mobileNavOpen) ? "bg-primary-light" : "bg-white"
                    }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                        <DesktopLinks
                            links={links}
                            setHovered={setHovered}
                        />
                    </div>
                    <a
                        href="/acceder"
                        className="hidden md:block btn btn-primary text-center decoration-none"
                    >
                        <span className="font-bold">Acceder - </span> a la plataforma
                    </a>
                    <button
                        onClick={() => setMobileNavOpen((pv) => !pv)}
                        className="block text-2xl text-text-main md:hidden border-none bg-transparent cursor-pointer"
                    >
                        <FiMenu />
                    </button>
                </div>

                {/* Desktop submenus rendered outside the flex container to prevent layout shifting */}
                <DesktopSubmenu hovered={hovered} activeSublinks={activeSublinks} />

                <MobileLinks links={links} open={mobileNavOpen} />
            </nav>
            <motion.main layout className={`${navBackground} px-2 pb-2 grow flex flex-col`}>
                <div className={`${bodyBackground} rounded-3xl w-full grow flex flex-col`}>{children}</div>
            </motion.main>
        </>
    );
};

const Logo = () => {
    return (
        <a href="/" className="flex items-center no-underline mr-4">
            <img
                src="/logo_dataumsa.png"
                alt="Logo DataUMSA"
                className="h-8 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
            />
        </a>
    );
};

const DesktopLinks = ({
    links,
    setHovered,
}: {
    links: LinkType[];
    setHovered: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
    return (
        <div className="ml-9 hidden md:block">
            <div className="flex gap-6 items-center">
                {links.map((l) => (
                    <TopLink 
                        key={l.title} 
                        setHovered={setHovered} 
                        title={l.title} 
                        href={l.href}
                        target={l.target}
                        isExternal={l.isExternal}
                    >
                        {l.title}
                    </TopLink>
                ))}
            </div>
        </div>
    );
};

const DesktopSubmenu = ({
    hovered,
    activeSublinks,
}: {
    hovered: string | null;
    activeSublinks: LinkType["sublinks"];
}) => {
    return (
        <div className="hidden md:block">
            <AnimatePresence mode="popLayout">
                {hovered && activeSublinks && activeSublinks.length > 0 && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                        className="space-y-4 py-6 pl-[190px] overflow-hidden"
                    >
                        {activeSublinks.map((l) => (
                            <a
                                className="block text-2xl font-semibold text-text-main transition-colors hover:text-primary-dark no-underline font-display"
                                href={l.href}
                                key={l.title}
                            >
                                {l.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileLinks = ({ links, open }: { links: LinkType[]; open: boolean }) => {
    return (
        <AnimatePresence mode="popLayout">
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className="grid grid-cols-2 gap-6 py-6 md:hidden"
                >
                    {links.map((l) => {
                        return (
                            <div key={l.title} className="space-y-1.5">
                                {l.href ? (
                                    <a
                                        className="text-md font-semibold text-text-main no-underline hover:text-primary-dark font-display flex items-center gap-1"
                                        href={l.href}
                                        target={l.target}
                                        rel={l.target === "_blank" ? "noopener noreferrer" : undefined}
                                    >
                                        {l.title}
                                        {l.isExternal && <FiExternalLink className="w-3.5 h-3.5 text-text-muted" />}
                                    </a>
                                ) : (
                                    <span className="text-md block font-semibold text-text-main font-display">
                                        {l.title}
                                    </span>
                                )}
                                {l.sublinks && l.sublinks.map((sl) => (
                                    <a
                                        className="text-md block text-text-muted no-underline hover:text-primary-dark font-display"
                                        href={sl.href}
                                        key={sl.title}
                                    >
                                        {sl.title}
                                    </a>
                                ))}
                            </div>
                        );
                    })}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const TopLink = ({
    children,
    setHovered,
    title,
    href,
    target,
    isExternal,
}: {
    children: React.ReactNode;
    setHovered: React.Dispatch<React.SetStateAction<null | string>>;
    title: string;
    href?: string;
    target?: string;
    isExternal?: boolean;
}) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHovered(title)}
                className="cursor-pointer text-text-main transition-colors hover:text-primary-dark no-underline font-semibold font-display flex items-center gap-1"
            >
                {children}
                {isExternal && <FiExternalLink className="w-3.5 h-3.5 text-text-muted" />}
            </a>
        );
    }
    return (
        <span
            onMouseEnter={() => setHovered(title)}
            className="cursor-pointer text-text-main transition-colors hover:text-primary-dark font-semibold font-display"
        >
            {children}
        </span>
    );
};