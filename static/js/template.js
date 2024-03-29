let scientist, tab;

const info = [
    {
        "location": "England",
        "name": "John Dalton",
        "nickname": "The Father of Chemistry",
        "stars": 2
    },
    {
        "location": "Russia",
        "name": "Dmitri Mendeleev",
        "nickname": "The Father of the Periodic Table",
        "stars": 3
    },
    {
        "location": "England",
        "name": "J. J. Thomson",
        "nickname": "Sir Plum Pudding",
        "stars": 3
    },
    {
        "location": "New Zealand",
        "name": "Ernest Rutherford",
        "nickname": "The Father of Nuclear Physics",
        "stars": 4
    },
    {
        "location": "Denmark",
        "name": "Niels Bohr",
        "nickname": "Nicholas Baker",
        "stars": 4
    },
    {
        "location": "England",
        "name": "James Chadwick",
        "nickname": "Jimmy Neutron",
        "stars": 3
    },
    {
        "location": "Germany",
        "name": "Max Planck",
        "nickname": "The Founding Father of Quantum Theory",
        "stars": 1
    },
    {
        "location": "Germany → America",
        "name": "Albert Einstein",
        "nickname": "Der Depperte",
        "stars": 5
    },
    {
        "location": "France",
        "name": "Louis de Broglie",
        "nickname": "Jekyll and Hyde",
        "stars": 2
    },
    {
        "location": "Austria-Hungary",
        "name": "Erwin Schrödinger",
        "nickname": "Dead or Alive",
        "stars": 3
    },
    {
        "location": "Germany",
        "name": "Werner Heisenberg",
        "nickname": "Walter White",
        "stars": 2
    }
]
const data = [
    {
        "basic": {
            "Full Name": "John Dalton",
            "Born": "September 6, 1766",
            "Died": "July 27, 1844",
            "Known for" : [
                "Atomic Theory",
                "Dalton's Gas Law",
                "Colour blindness research"
            ],
            "Fields": [
                "Chemistry",
                "Physics",
                "Meteorology"
            ]
        },
        "fame": {
            "First Publication": "1793 - Meteorological Observations and Essays, J. Dalton",
            "Famous Publication": "1808 - A New System of Chemical Philosophy, J. Dalton<br>Dalton introduced the idea that different elements could be universally distinguished based on their atomic weights in this book, becoming the first scientist to explain the behavior of atoms in terms of weight.",
            "Year of Fame": "1826 - Awarded the Royal Medal for his Atomic Theory"
        },
        "history": {
            "History": "<br>Dalton had a sharp mind and a strong sense of curiosity as a child. However, he didn't receive a formal education, and only completing grade school. When he was 15, he helped his brother run a boarding school, while simultaneously teaching himself mathematics, science, French, Greek and Latin. He became a teacher for natural philosophy and mathematics in 1793 and in 1803, Dalton published his Law of Partial Pressures."
        }
    },
    {
        "basic": {
            "Full Name": "Dmitri Ivanovich Mendeleev",
            "Born": "February 8, 1834",
            "Died": "February 2, 1907",
            "Known for" : [
                "Devising the Periodic Table",
                "Predicting elements' properties before they were discovered"
            ],
            "Fields": [
                "Chemistry",
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1854 - Chemical Analysis of a Sample from Finland, D. Mendeleev",
            "Famous Publication": "1868 - Principles of Chemistry, D. Mendeleev<br>Mendeleev introduced the basic layout of the periodic table in this textbook, outlining the pattern displayed by the periodic law.",
            "Year of Fame": "1882 - Awarded the Davy Medal along with Julius Lothar Meyer for “The discovery of the periodic relations of the atomic weights”"
        },
        "history": {
            "History": "<br>When Mendeleev was a child, his father passed away, leaving his mother to work to support him and his 16 siblings by herself. She travelled to St. Petersburg to get Mendeleev an education, before passing away. There, Mendeleev studied at the Main Pedagogical Institute for his Masters, and later became a chemistry professor at the University of St. Petersburg. It was while Mendeleev was writing his own lecture textbooks that he invented the periodic table."
        }
    },
    {
        "basic": {
            "Full Name": "Joseph John Thomson",
            "Born": "December 18, 1856",
            "Died": "August 30, 1940",
            "Known for" : [
                "The discovery of the electron - the first subatomic particle",
                "Finding the first evidence that stable elements can exist as isotopes",
                "Inventing the mass spectrometer - one of the most powerful tools in analytical chemistry"
            ],
            "Fields": [
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1876, Experiments on Contact Electricity between Non-Conductors, J. J. Thomson",
            "Famous Publication": "1898 - Discharge of Electricity through Gases, J. J. Thomson<br>A publication of lectures given in 1897, the discovery of the electron written in it makes him famous.",
            "Year of Fame": "1906 - Awarded the Nobel Prize in Physics “in recognition of the great merits of his theoretical and experimental investigations on the conduction of electricity by gases.”",
            "Knighted": "1908 - Order of Merit (OM), Sir Joseph John Thomson"
        },
        "history": {
            "History": "<br>Thomson had a strong interest in science as a child, and went to college to study mathematics, physics, and engineering when he was 14. He wanted to apprentice to an engineer, but couldn't afford it due to the death of this father. In 1897, Thomson discovered the electron while experimenting with cathode ray tubes. The experiment showed that all atoms contain tiny negatively charged particles. Thomson then modelled the atom as a plum pudding, where the electrons were embedded in a positively charged sphere, like the plums in plum pudding."
        }
    },
    {
        "basic": {
            "Full Name": "Ernest Rutherford",
            "Born": "August 30, 1871",
            "Died": "October 19, 1937",
            "Known for" : [
                "The discovery of the nucleus",
                "The discovery of alpha radiation and beta radiation"
            ],
            "Fields": [
                "Physics",
                "Chemistry"
            ]
        },
        "fame": {
            "First Publication": "1894 - Magnetization of Iron by High-Frequency Discharges, E. Rutherford",
            "Famous Publication": "1911, The Scattering of <i style='font-weight: 200; font-size: 1.4rem;'>α</i> and <i style='font-weight: 200; font-size: 1.4rem;'>β</i> Particles by Matter and the Structure of the Atom, E. Rutherford<br>Rutherford describes his discovery of the nucleus in the atomic structure due to the result of bombarding gold foil with alpha particles.",
            "Year of Fame": "1908 - Awarded the Nobel Prize in Chemistry “for his investigations into the disintegration of the elements, and the chemistry of radioactive substances.”",
            "Knighted": "1914 - Order of Merit (OM), Sir Ernest Rutherford",
            "Peerage": "1931 - Lord Ernest Rutherford, 1st Baron Rutherford of Nelson"
        },
        "history": {
            "History": "<br>Rutherford helped with the family farm as a child, he and liked to swim with his brothers. He conducted his first scientific experiment when he was 10 years old, where he made a small cannon inspired by a science book he read. In 1911, Ernest Rutherford, Hans Geiger and Ernest Marsden found the atomic nucleus by firing positive alpha particles into thin gold sheets. Although many alpha particles passed through, a small percentage of the alpha particles bounced back. This showed that a large amount of the atom is empty space, and the majority of the mass comes from the positively charged center."
        }
    },
    {
        "basic": {
            "Full Name": "Niels Henrik David Bohr",
            "Born": "October 7, 1885",
            "Died": "November 18, 1962",
            "Known for" : [
                "Quantum Theory",
                "Atomic Structure",
                "Bohr's Quantized Shell Model"
            ],
            "Fields": [
                "Theoretical Physics"
            ]
        },
        "fame": {
            "First Publication": "1909 - Determination of the Surface-Tension of Water by the Method of Jet Vibration, N. Bohr",
            "Famous Publication": "1913 - On the Constitution of Atoms and Molecules, N. Bohr<br>The first of a series of three papers, where Bohr introduced his model of the atom. He wrote that electrons can only occupy particular orbits determined by the quantum of action and that electromagnetic radiation only occurred when an electron jumped to a lower energy orbit.",
            "Year of Fame": "1922 - Awarded the Nobel Prize in Physics “for his services in the investigation of the structure of atoms and of the radiation emanating from them.”"
        },
        "history": {
            "History": "<br>Bohr had always been interested in physics since a young age. He enrolled at the University of Copenhagen in 1903 and earned his doctorate in 1911. In 1912, Bohr was working for J. J. Thompson, meeting Rutherford who supervised Bohr's research of atom properties. From 1916 to 1962, he was a professor for theoretical physics at the University of Copenhagen. During WWII, he fled from Denmark to America, becoming an activist against nuclear weapons"
        }
    },
    {
        "basic": {
            "Full Name": "James Chadwick",
            "Born": "October 20, 1891",
            "Died": "July 24, 1974",
            "Known for" : [
                "The discovery of the neutron"
            ],
            "Fields": [
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1912 - A Balance Method for Comparison of Quantities of Radium and Some of its Applications, J. Chadwick and E. Rutherford",
            "Famous Publication": "1932, The Possible Existence of a Neutron, J. Chadwick<br>In this work, Chadwick proves the existence of the neutron, a fundamental subatomic particle.",
            "Year of Fame": "1935 - Awarded the Nobel Prize in Physics “for the discovery of the neutron.”",
            "Knighted": "1945 - Order of the Companions of Honour (CH), Sir James Chadwick"
        },
        "history": {
            "History": "<br>Chadwick's favourite subjects were mathematics and physics when he was young. He won entry to the prestigious Manchester Grammar School when he was 11, but his family was too poor to afford the school fees. He later won a scholarship to the Victoria University of Manchester when he was 16, where he studied under Ernest Rutherford. In 1914, WWI broke out, and Chadwick was confined in a prison camp for 4 years while in Berlin. He started a science club with the other prisoners where they conducted simple experiments on radioactivity. After the war, rejoined Rutherford to finish his PhD in 1921 and became the Assistant Director of Research in the Cavendish Laboratory in 1923. Chadwick disagreed with the explanation of Frédéric and Irène Joliot-Curie's paraffin wax experiment, and discovered the neutron while conducting similar experiments."
        }
    },
    {
        "basic": {
            "Full Name": "Max Karl Ernst Ludwig Planck",
            "Born": "April 23, 1858",
            "Died": "October 4, 1947",
            "Known for" : [
                "The discovery of the quantum of action, Planck's constant",
                "The originator of quantum theory"
            ],
            "Fields": [
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1897 - Thermodynamics, M. Planck",
            "Famous Publication": "1901 - On the Law of Distribution of Energy in the Normal Spectrum, M. Planck<br>Planck black-body radiation law is expanded upon in this work, which scientists hailed as indisputably correct.",
            "Year of Fame": "1918, Awarded the Nobel Prize in Physics “in recognition of the services he rendered to the advancement of Physics by his discovery of energy quanta.”"
        },
        "history": {
            "History": "<br>Planck was gifted mathematically and musically from a young age. He enrolled at the University of Munich when he was 17, studying physics. While studying under Hermann von Helmholtz and Gustav Kirchhoff, he became increasingly interested in thermodynamics. He began studying the topic on his own, reading papers written by Rudolf Clausius, one of thermodynamics' founders. Planck earned a PhD in physics with a thesis on the second law of thermodynamics in 1879, became a lecturer at the University of Munich a year later, and a full-time professor of theoretical physics in 1892. it was his work in thermodynamics that ultimately led to him discovering the quantum of action in 1900."
        }
    },
    {
        "basic": {
            "Full Name": "Albert Einstein",
            "Born": "March 14, 1879",
            "Died": "April 18, 1955",
            "Known for" : [
                "Mass–energy equivalence (E = mc²)",
                "The development of the theory of special and general relativity",
                "The discovery of the photoelectric effect",
                "Providing evidence of the existence of atoms and molecules"
            ],
            "Fields": [
                "Physics",
                "Philosophy"
            ]
        },
        "fame": {
            "First Publication": "1901 - Conclusions Drawn from the Phenomena of Capillarity, A. Einstein",
            "Famous Publication": "1915 - The Field Equations of Gravitation, A. Einstein<br>The fourth of Einstein's 4 papers published on the General Theory of Relativity in 1915",
            "Year of Fame": "1919 - Einstein's General Theory of Relativity was proven, making him an instant celebrity overnight."
        },
        "history": {
            "History": "<br>Einstein was not talkative as a child and barely spoke at all until he was 3. Because he was slow to learn to talk and he always whispered to himself before speaking, the maid nicknamed him “der Depperte”, the dopey one. Einstein dropped out of highschool and later applied to the Swiss Federal Polytechnic School in Zürich, where he failed the entrance exam. However, due to his exceptionally high scores in mathematics and physics, he was allowed entry on the condition he completed his high school diploma first. Once he enrolled however, He didn't like the teaching methods at the school, and often skipped classes to study topics on his own and conduct experiments. Einstein graduated in 1900 with the help of his friends' notes, but his teachers refused to recommend him for employment. He later earned his doctorate degree in 1905, where he would go on to write the first of his papers in his miracle year. In 1933, Einstein left Germany forever and moved to America due to Nazi backlash near the beginning of WWII."
        }
    },
    {
        "basic": {
            "Full Name": "Louis Victor Pierre Raymond, 7th Duc de Broglie",
            "Born": "August 15, 1892",
            "Died": "March 19, 1987",
            "Known for" : [
                "Predicting the wave nature of electrons",
                "His contributions to quantum theory",
                "Dual nature of matter"
            ],
            "Fields": [
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1923 - Waves and Quanta, L. de Broglie",
            "Famous Publication": "1924 - Researches on the Quantum Theory, L. de Broglie<br>In this paper, de Broglie extends the wave-particle duality theory to all matter, and suggests the possibility of the wave nature of electrons.",
            "Year of Fame": "1929 - Awarded the Nobel Prize in Physics “for his discovery of the wave nature of electrons.”"
        },
        "history": {
            "History": "<br>De Broglie was born a member of the French nobility. He studied history and earned a degree in 1910. However, he decided to break family precedent and study physics as well, earning a degree in 1913. His brother Maurice was also a physicist and after WWI, Louis began to work with Maurice's lab, where he specialized in theoretical physics. Maurice's lab worked with X-rays, which made Louis think about the wave-particle duality of light, eventually bringing about his theory on electron waves."
        }
    },
    {
        "basic": {
            "Full Name": "Erwin Rudolf Josef Alexander Schrödinger",
            "Born": "August 12, 1887",
            "Died": "January 4, 1961",
            "Known for" : [
                "Schrödinger's wave equation (quantum mechanics)",
                "Schrödinger's cat thought experiment"
            ],
            "Fields": [
                "Physics"
            ]
        },
        "fame": {
            "First Publication": "1910, - On the Conduction of Electricity on the Surface of Insulators in Moist Air, E. Schrödinger",
            "Famous Publication": "1926 - Quantization as an Eigenvalue Problem, E. Schrödinger<br>Schrödinger expresses the probability waves that govern the motion of small particles.",
            "Year of Fame": "1933, Awarded the Nobel Prize in Physics along with Paul Adrien Maurice Dirac “for the discovery of new productive forms of atomic theory.”"
        },
        "history": {
            "History": "<br>Schrödinger was interested in physics, mathematics, languages and poetry as a child. He attended the university of Vienna in 1906, where he graduated with his doctorate in 1910. He moved to the University of Zürich in 1921 where he studied atomic structure and quantum statistics for the next 6 years. In 1926, Schrödinger wrote the papers that provided the foundation of quantum wave mechanics. He succeeded Max Planck in 1927 as the chair of theoretical physics at the University of Berlin where he stayed until 1934. In 1935 he proposed the Schrödinger's Cat thought experiment as an objection to the factor of probability in quantum physics."
        }
    },
    {
        "basic": {
            "Full Name": "Werner Karl Heisenberg",
            "Born": "December 5, 1901",
            "Died": " February 1, 1976",
            "Known for" : [
                "Quantum field theory",
                "Nuclear physics",
                "The discovery of the Uncertainty Principle",
                "Formulating quantum mechanics in terms of matrices"
            ],
            "Fields": [
                "Theoretical Physics"
            ]
        },
        "fame": {
            "First Publication": "1922 - On the Quantum Theory of the Line Structure and the Anomalous Zeeman Effects, W. Heisenberg",
            "Famous Publication": "1927 - On the Perceptual Content of Quantum Theoretical Kinematics and Mechanics, W. Heisenberg<br>Heisenberg proposes his famous Uncertainty Principle in this paper.",
            "Year of Fame": "1932, Awarded the Nobel Prize in Physics “for the creation of quantum mechanics, the application of which has, inter alia, led to the discovery of the allotropic forms of hydrogen.”"
        },
        "history": {
            "History": "<br>Heisenberg had to leave highschool to harvest crops when WWI broke out. After the war, he volunteered as a political messenger for the democratic socialist movement. Since Heisenberg was barred from advanced math seminars, he switched to theoretical physics, though he originally wanted to pursue mathematics. He would meet well-known scientific figures like Niels Bohr and Wolfgang Pauli at school. Heisenberg teamed up with Bohr in 1926, pondering over quantum properties of electrons. He discovered that electrons hit with gamma rays would behave differently. Heisenberg found that electron's position and velocity could be measured, though both could not be measured precisely at the same time without throwing the other off. Heisenberg called this the uncertainty principle."
        }
    }
];

function setTemplate() {
    $(".menu").empty();
    if (tab != "cites") {
        for (let key in data[scientist][tab]) {
            let value = data[scientist][tab][key]
            if (typeof value === "string" || value instanceof String) {
                $(".menu").append(`<p>${key}:&ensp;<b>${value}</b></p>`);
            } else {
                $(".menu").append(`<p>${key}:</p>`);
                let list = "";
                for (let el of value) {
                    list += `<li>${el}</li>`;
                }
                $(".menu").append(`<ul><b>${list}</b></ul>`);
            }
        }
    } else {
        $(".menu").append(`<a href="references/" style="color: rgb(102, 62, 31); text-decoration: none;">See references<span class="material-icons-outlined">chevron_right</span></a>`);
    }
    $(".location").html(`<span class="material-icons-outlined">place</span>${info[scientist].location}`);
    $(".name").text(info[scientist].name);
    $(".nickname").text(info[scientist].nickname);
    $(".portrait").attr("src", `static/img/${scientist}.png`)
    const star = "<span class='material-icons'>star_border</span>";
    $(".stars").html(star.repeat(info[scientist].stars));
    document.title = info[scientist].name
}

$(document).ready(function() {
    let urlParams = new URLSearchParams(window.location.search);
    if(!urlParams.get("scientist")) {
        urlParams.set("scientist", 0);
        history.replaceState(null, null, "?"+urlParams.toString());
    }
    if(!urlParams.get("tab")) {
        urlParams.set("tab", "basic");
        history.replaceState(null, null, "?"+urlParams.toString());
    }
    scientist = urlParams.get("scientist");
    tab = urlParams.get("tab");
    $("#"+tab).addClass("active");
    setTemplate();

    $(".tab").on("click", function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        urlParams.set("tab", $(this).attr("id"));
        history.replaceState(null, null, "?"+urlParams.toString());
        tab = urlParams.get("tab");
        setTemplate();
    });
    $(".prev").on("click", function() {
        scientist--;
        if (scientist < 0) {
            scientist += info.length;
        }
        urlParams.set("scientist", scientist);
        history.replaceState(null, null, "?"+urlParams.toString());
        setTemplate();
    });
    $(".next").on("click", function() {
        scientist++;
        scientist %= info.length;
        urlParams.set("scientist", scientist);
        history.replaceState(null, null, "?"+urlParams.toString());
        setTemplate();
    });
})