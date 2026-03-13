# Chapitre 2 : Ensembles et applications
**Licence 1 (DLMI)**  
Élèves de DLMI

---

# 1. Généralités sur les applications

## Définition — Application

Une application de $E$ dans $F$ est une relation $f$ qui à tout élément $x$ de $E$ associe **un élément $f(x)$ de $F$ et un seul**.

Notation :

$$
f : E \to F
$$

$$
x \mapsto f(x)
$$

---

## Définition — Image et antécédent

- Soit $x \in E$. $f(x)$ s'appelle **l'image de $x$ par $f$**.
- Soit $y \in F$. S'il existe $x$ tel que $y = f(x)$, $x$ est appelé **un antécédent de $y$ par $f$**.

---

## Définition — Graphe d'une application

On appelle graphe de $f$ l'ensemble :

$$
\{(x,f(x)) \mid x \in E\}
$$

ou

$$
\{(x,y) \in E \times F \mid y = f(x)\}
$$

---

## Définition — Image d'une application

L'image de $f$, notée $Im(f)$, est l'ensemble des images des éléments de $E$.

$$
Im(f)=\{y\in F \mid \exists x\in E,\ y=f(x)\}
$$

---

### Remarque

**Fonction :**

associe à tout $x \in E$ **au plus une image**.

**Application :**

associe à tout $x \in E$ **une image et une seule**.

---

## Définition — Ensemble de définition

L'ensemble de définition de $f$, noté $\mathcal D_f$, est

$$
\mathcal D_f = \{x \in E \mid f(x)\ \text{est défini}\}
$$

---

# 2. Composition et identité

## Définition — Composition

Soient

$$
f : E \to F
$$

et

$$
g : F \to G
$$

La composée $g \circ f$ est définie par

$$
(g \circ f)(x) = g(f(x))
$$

---

## Propriété — Associativité

Si

$$
f : E \to F,\quad g : F \to G,\quad h : G \to H
$$

alors

$$
h \circ (g \circ f) = (h \circ g) \circ f
$$

---

## Définition — Application identité

L'application identité de $E$ est

$$
Id_E : E \to E
$$

$$
Id_E(x)=x
$$

---

## Propriété — Élément neutre

Si $f : E \to F$

$$
f \circ Id_E = f
$$

et

$$
Id_F \circ f = f
$$

---

# 3. Images directe et réciproque

## Définition — Image directe

Si $A \subset E$

$$
f(A)=\{f(x) \mid x\in A\}
$$

ou

$$
f(A)=\{y\in F \mid \exists x\in A,\ y=f(x)\}
$$

---

## Définition — Image réciproque

Si $B \subset F$

$$
f^{-1}(B)=\{x\in E \mid f(x)\in B\}
$$

---

## Propriété — Inclusion

Si

$$
A \subset B
$$

alors

$$
f(A) \subset f(B)
$$

et si

$$
C \subset D
$$

alors

$$
f^{-1}(C) \subset f^{-1}(D)
$$

---

## Propriété — Union et intersection

$$
f(A \cap B) \subset f(A) \cap f(B)
$$

$$
f(A \cup B) = f(A) \cup f(B)
$$

$$
f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D)
$$

$$
f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D)
$$

---

## Définition — Restriction

Si $A \subset E$

$$
f_{|A} : A \to F
$$

$$
f_{|A}(x)=f(x)
$$

---

# 4. Injectivité, surjectivité, bijectivité

## Injectivité

### Définition

$f$ est **injective** si

$$
f(x)=f(x') \Rightarrow x=x'
$$

ou

$$
x\ne x' \Rightarrow f(x)\ne f(x')
$$

---

### Propriété — Monotonie

Si

$$
f : A \to \mathbb R
$$

est **strictement monotone** sur $A$ alors $f$ est **injective**.

---

## Surjectivité

### Définition

$f$ est **surjective** si

$$
\forall y\in F,\ \exists x\in E,\ y=f(x)
$$

ou

$$
Im(f)=F
$$

---

## Bijectivité

### Définition

$f$ est **bijective** si

$$
\forall y\in F,\ \exists! x\in E,\ y=f(x)
$$

ou si $f$ est **injective et surjective**.

---

## Théorème — Bijection monotone

Si

- $I$ est un intervalle
- $f$ est continue
- $f$ est strictement monotone

alors

$$
f : I \to f(I)
$$

est une **bijection**.

Si $I=[a,b]$

croissante :

$$
f(I)=[f(a),f(b)]
$$

décroissante :

$$
f(I)=[f(b),f(a)]
$$

---

## Bijection réciproque

Si $f$ est bijective alors

$$
f^{-1} : F \to E
$$

associe à chaque élément son **unique antécédent**.

---

## Dérivée de la réciproque

Si

- $f$ bijective
- $f$ dérivable
- $f' \ne 0$

alors

$$
(f^{-1})'(x) =
\frac{1}{f'(f^{-1}(x))}
$$

---

# 5. Application et cardinalité

Si $E$ et $F$ sont finis :

1.

$$
card(E) \le card(F)
$$

ssi il existe **une injection** de $E$ dans $F$.

2.

$$
card(E) \ge card(F)
$$

ssi il existe **une surjection** de $E$ sur $F$.

3.

$$
card(E)=card(F)
$$

ssi il existe **une bijection**.

---

# 6. Relations binaires

## Définition

Une relation binaire $\mathcal R$ est définie par

$$
G \subset E \times F
$$

Si $(x,y)\in G$

$$
x \mathcal R y
$$

---

## Propriétés

Une relation est :

### Réflexive

$$
\forall x\in E,\ xRx
$$

### Symétrique

$$
xRy \Rightarrow yRx
$$

### Antisymétrique

$$
(xRy \land yRx) \Rightarrow x=y
$$

### Transitive

$$
(xRy \land yRz) \Rightarrow xRz
$$

---

## Relation d'équivalence

Une relation est une **relation d'équivalence** si elle est :

- réflexive
- symétrique
- transitive

---

## Classe d'équivalence

$$
[x] = \{y \in E \mid xRy\}
$$

---

## Relation d'ordre

Une relation d'ordre est :

- réflexive
- antisymétrique
- transitive

Ordre **total**

$$
x \le y \quad \text{ou} \quad y \le x
$$

Ordre **partiel** : certains éléments sont incomparables.