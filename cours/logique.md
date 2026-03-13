# Chapitre 1 : Logique et Ensembles

**Élèves de DLMI**

---

## Introduction

La logique permet de comprendre précisément ce que signifient des expressions comme
« si... alors... », « pour tout », « il existe », ou encore « si et seulement si ».

Pour les élèves de Terminale, ce chapitre représente une transition naturelle entre
les raisonnements du lycée et ceux de l’enseignement supérieur.
En effet, vous utilisez déjà la logique sans toujours la formaliser :
dans les démonstrations, les raisonnements par implication, les équivalences,
ou encore les raisonnements par contraposée.

Ce cours vise à structurer ces outils, à leur donner un cadre rigoureux et à
montrer qu’ils sont parfaitement accessibles avec de l’entraînement.

La logique n’est pas difficile :
elle demande surtout de la méthode, de la précision et de la pratique régulière.

Avec des exercices progressifs, vous constaterez que ces notions deviennent
rapidement naturelles et constituent un véritable appui pour la suite
de vos études scientifiques.

---

## 1. Logique propositionnelle

### 1.1 Proposition

Une proposition est un énoncé pouvant être vrai ou faux.

---

### 1.2 Variable propositionnelle

Une variable propositionnelle est un symbole qui désigne une proposition.
Il s’agit donc d’une variable qui peut être remplacée par une proposition vraie ou fausse.

---

### 1.3 Négation

La négation de $P$, notée $\neg P$, ou $\overline{P}$, ou encore non P, est la proposition qui est fausse lorsque $P$ est vraie et vraie lorsque $P$ est fausse.

$$
\begin{array}{c|c}
P & \neg P \\
\hline
V & F \\
F & V
\end{array}
$$

---

### 1.4 Connecteurs logiques $\lor$ et $\land$

Soient $P$ et $Q$ deux propositions.
Les propositions $P \lor Q$ et $P \land Q$ sont définies par les tables de vérité suivantes :

$$
\begin{array}{c|c|c|c}
P & Q & P \lor Q & P \land Q \\
\hline
1 & 1 & 1 & 1 \\
1 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0
\end{array}
$$

Le connecteur « ou » est noté $\lor$ et le connecteur « et » est noté $\land$.

Les symboles $\lor$ et $\land$ sont aussi utilisés en arithmétique pour PGCD et PPCM, ils ne signifient donc pas la même chose.

---

### 1.5 Implication

Si $P$ et $Q$ sont deux propositions, on définit l’implication logique

$$
P \Rightarrow Q
$$

par :

$$
P \Rightarrow Q \Leftrightarrow \neg P \lor Q
$$

$$
\begin{array}{c|c|c|c|c}
P & Q & \neg P & \neg P \lor Q & P \Rightarrow Q \\
\hline
1 & 1 & 0 & 1 & 1 \\
1 & 0 & 0 & 0 & 0 \\
0 & 1 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 1
\end{array}
$$

---

### 1.6 Transitivité de l’implication

$$
((P \Rightarrow Q) \land (Q \Rightarrow R)) \Rightarrow (P \Rightarrow R)
$$

---

### 1.7 Équivalence

La proposition « $P$ est équivalente à $Q$ » est la proposition :

$$
(P \Rightarrow Q) \land (Q \Rightarrow P)
$$

On la note :

$$
P \Leftrightarrow Q
$$

Condition nécessaire et suffisante (CNS), si et seulement si (ssi), il faut et il suffit signifient logiquement équivalent, c’est-à-dire $\Leftrightarrow$.

Si $P$ est une condition nécessaire pour $Q$, alors $Q \Rightarrow P$.
Si $P$ est une condition suffisante pour $Q$, alors $P \Rightarrow Q$.

---

### 1.8 Tautologie — Contradiction

Une formule logique qui est vraie dans tout contexte est une tautologie, notée souvent $\top$.

Une formule logique qui est fausse dans tout contexte est une contradiction, notée souvent $\bot$.

Une formule dont la négation n’est pas une tautologie est dite satisfiable.

La négation d’une tautologie est une contradiction et inversement.

---

## 2. Calcul propositionnel

### 2.1 Lois de De Morgan

$$
\neg (P \land Q) \Leftrightarrow \neg P \lor \neg Q
$$

$$
\neg (P \lor Q) \Leftrightarrow \neg P \land \neg Q
$$

Vous reverrez ça en cours d'Architecture des ordis.

---

### 2.2 Associativité et distributivité

1. Associativité :

$$
((P \land Q) \land R) \Leftrightarrow (P \land (Q \land R))
$$

$$
((P \lor Q) \lor R) \Leftrightarrow (P \lor (Q \lor R))
$$

2. Distributivité :

$$
((P \land Q) \lor R) \Leftrightarrow ((P \lor R) \land (Q \lor R))
$$

$$
((P \lor Q) \land R) \Leftrightarrow ((P \land R) \lor (Q \land R))
$$

---

### 2.3 Ordre de priorité des opérateurs

$$
\neg, \quad \land, \quad \lor, \quad \Rightarrow, \quad \Leftrightarrow
$$

---

### 2.4 Négation, contraposée et réciproque

La proposition $\neg Q \Rightarrow \neg P$ s’appelle la contraposée de $P \Rightarrow Q$.

La proposition $Q \Rightarrow P$ s’appelle la réciproque de $P \Rightarrow Q$.

$$
(\neg Q \Rightarrow \neg P) \Leftrightarrow (P \Rightarrow Q)
$$

$$
\neg (P \Rightarrow Q) \Leftrightarrow (P \land \neg Q)
$$

---

## 3. Formes normales

### 3.1 Littéral — Clause

Un littéral est une proposition de la forme $P$ ou $\neg P$.

Une clause de conjonction est une proposition de la forme

$$
F_1 \land \cdots \land F_n
$$

où les $F_i$ sont des littéraux.

Une clause de disjonction est une proposition de la forme

$$
F_1 \lor \cdots \lor F_n
$$

où les $F_i$ sont des littéraux.

---

### 3.2 Forme normale

Une forme normale disjonctive (FND) est une disjonction de clauses de conjonctions.

Une forme normale conjonctive (FNC) est une conjonction de clauses de disjonctions.

---

### 3.3 Existence des formes normales

Toute formule logique est équivalente à une forme normale disjonctive et à une forme normale conjonctive.

---

## 4. Logique des prédicats

### 4.1 Prédicat

Un prédicat est une fonction à valeurs booléennes :

$$
\text{nom\_prédicat}(obj_1, obj_2, \dots, obj_n)
$$

---

### 4.2 Arité

Le nombre $n$ d’arguments d’une fonction s’appelle son arité.

Cela vous sera utile en cours d'Algo !

---

### 4.3 Quantificateurs

Le quantificateur $\forall$ signifie « pour tout ».

Le quantificateur $\exists$ signifie « il existe ».

---

### 4.4 Négation et quantificateurs

$$
\neg \forall x\, P(x) \Leftrightarrow \exists x\, \neg P(x)
$$

$$
\neg \exists x\, P(x) \Leftrightarrow \forall x\, \neg P(x)
$$

---

### 4.5 Ordre des quantificateurs

$$
\forall x \forall y (P(x) \land Q(y))
\Leftrightarrow
(\forall x P(x)) \land (\forall y Q(y))
$$

$$
\exists x \exists y (P(x) \land Q(y))
\Leftrightarrow
(\exists x P(x)) \land (\exists y Q(y))
$$

On a les mêmes résultats en remplaçant $\land$ par $\lor$.

$$
\forall x \exists y (P(x) \land Q(y))
\Leftrightarrow
(\forall x P(x)) \land (\exists y Q(y))
$$

$$
\forall x \exists y (P(x) \lor Q(y))
\Leftrightarrow
(\forall x P(x)) \lor (\exists y Q(y))
$$

---

### 4.6 Distributivité

$$
\forall x (P(x) \land Q(x))
\Leftrightarrow
(\forall x P(x)) \land (\forall x Q(x))
$$

$$
\exists x (P(x) \lor Q(x))
\Leftrightarrow
(\exists x P(x)) \lor (\exists x Q(x))
$$

N'ayez pas peur ! Faut juste prendre le temps de lire !

---

## Exercices d'entraînement

### Exercice 1 — Tables de vérité

1. $(P \Rightarrow Q) \Leftrightarrow (\neg Q \Rightarrow \neg P)$  
2. $\neg (P \land (Q \lor R))$  
3. $(P \lor Q) \Rightarrow R$

---

### Exercice 2 — Tautologie ou contradiction

1. $P \lor \neg P$  
2. $P \land \neg P$  
3. $(P \Rightarrow Q) \lor (Q \Rightarrow P)$  

---

### Exercice 3 — Implication

Soit l’implication suivante :

$$
P \Rightarrow Q
$$

1. Écrire sa négation.  
2. Écrire sa contraposée.  
3. Écrire sa réciproque.  
4. Lesquelles sont équivalentes à l’implication initiale ?

---

### Exercice 4 — Lois de De Morgan

1. $\neg (P \lor Q)$  
2. $\neg (P \land \neg Q)$  
3. $\neg ((P \land Q) \lor R)$  

---

### Exercice 5 — Quantificateurs

1. $\forall x \in \mathbb{R}, \; x^2 \geq 0$  
2. $\exists x \in \mathbb{R}, \; x^2 = -1$  
3. $\forall x \exists y, \; P(x,y)$  

---

### Exercice 6 — Forme normale

Mettre sous forme normale conjonctive puis sous forme normale disjonctive :

$$
(P \Rightarrow Q) \land (\neg Q \lor R)
$$