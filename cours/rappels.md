# Chapitre 0 : Rappels de Terminale

**Élèves de DLMI**

---

## Introduction

Vous retrouverez ici l'essentiel à connaître à la fin de votre cursus de spécialité maths en Terminale.  
Aucune notion inconnue ne sera présentée, seules les bases du programme sont ici.

Dans les prochains chapitres, vous découvrirez les prémices des mathématiques et de l’informatique en Double Licence Maths–Info à l’UPPA.

Ce cours est **ultra condensé** et la rigueur est volontairement allégée.

---

## 1. Rappels sur les suites

### 1.1 Définitions essentielles

- Une **suite réelle** est une fonction  
  $$
  u : \mathbb{N} \to \mathbb{R}, \quad n \mapsto u_n
  $$

- Une suite peut être :
  - **définie explicitement** : $u_n = n + \dots$
  - **définie par récurrence** :
    $$
    u_{n+1} = u_n + \dots \quad \text{avec } u_0 \text{ donné}
    $$

---

### 1.2 Suites usuelles

- **Suite arithmétique**
  $$
  u_{n+1} = u_n + r \quad \Rightarrow \quad u_n = u_0 + nr
  $$

- **Suite géométrique**
  $$
  u_{n+1} = q u_n \quad \Rightarrow \quad u_n = u_0 q^n
  $$

---

### 1.3 Monotonie

- $(u_n)$ est :
  - croissante si $u_{n+1} \ge u_n$
  - décroissante si $u_{n+1} \le u_n$

Méthodes :
- Étudier le signe de $u_{n+1}-u_n$
- Étudier les variations de la fonction associée $f(x)$

---

### 1.4 Bornes

- Majorée : $\exists M,\ u_n \le M$
- Minorée : $\exists m,\ u_n \ge m$
- Bornée : majorée et minorée

---

### 1.5 Limites

- $\lim u_n = \ell$ si $u_n$ se rapproche arbitrairement de $\ell$

Cas classiques :
- Suite arithmétique : $\lim u_n = \pm\infty$ si $r \neq 0$
- Suite géométrique :
  - $|q|<1 \Rightarrow \lim u_n = 0$
  - $q>1 \Rightarrow \lim u_n = +\infty$

---

### 1.6 Théorèmes fondamentaux

**Théorème de convergence monotone**  
Une suite croissante et majorée ou décroissante et minorée est convergente.

**Théorème des gendarmes**  
Si $a_n \le u_n \le b_n$ et  
$$
\lim a_n = \lim b_n = \ell
$$
alors $\lim u_n = \ell$.

**Théorème du point fixe**  
Si $u_{n+1}=f(u_n)$ et $u_n \to \ell$, alors $f(\ell)=\ell$.

---

### 1.7 Sommes

- Suite arithmétique :
$$
\sum_{i=p}^n u_i = (n-p+1)\frac{u_p+u_n}{2}
$$

- Suite géométrique ($q\neq1$) :
$$
\sum_{i=p}^n u_i = u_p\frac{1-q^{\,n-p+1}}{1-q}
$$

---

## 2. Continuité

### Définition

Une fonction $f$ est **continue en $a$** si :
$$
\lim_{x\to a} f(x)=f(a)
$$

---

### Fonctions continues usuelles

- Fonctions polynomiales sur $\mathbb{R}$
- Racine carrée sur $\mathbb{R}^+$
- Exponentielle sur $\mathbb{R}$
- Logarithme sur $\mathbb{R}^+$

---

### Théorème des valeurs intermédiaires (TVI)

Si $f$ est continue sur $[a,b]$, alors pour tout réel $k$ entre $f(a)$ et $f(b)$,  
il existe $c\in[a,b]$ tel que :
$$
f(c)=k
$$

---

## 3. Dérivation

### Nombre dérivé

$$
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
$$

---

### Opérations sur les dérivées

$$
(af+bg)' = af' + bg'
$$

$$
(fg)' = f'g + fg'
$$

$$
\left(\frac{f}{g}\right)' = \frac{f'g-fg'}{g^2}
$$

---

### Variations

- $f'(x)>0 \Rightarrow f$ croissante
- $f'(x)<0 \Rightarrow f$ décroissante
- $f'(x)=0$ : point critique

---

### Convexité

- $f''(x)>0$ : convexe
- $f''(x)<0$ : concave

Point d’inflexion :
$$
f''(a)=0 \quad \text{et changement de signe}
$$

---

## 4. Logarithme népérien

### Définition

$$
\ln(e^x)=x \quad ; \quad e^{\ln x}=x
$$

---

### Propriétés

$$
\ln(ab)=\ln a+\ln b
$$

$$
\ln\left(\frac{a}{b}\right)=\ln a-\ln b
$$

$$
\ln(a^k)=k\ln a
$$

---

### Dérivée

$$
(\ln x)'=\frac{1}{x}
$$

---

## 5. Équations différentielles

### Cas fondamental

$$
y'=ay
$$

Solution générale :
$$
y(x)=Ce^{ax}
$$

---

### Cas $y'=ay+b$

Solution générale :
$$
y(x)=Ce^{ax}-\frac{b}{a}
$$

---

## 6. Primitives

### Définition

Une primitive $F$ de $f$ vérifie :
$$
F'(x)=f(x)
$$

---

### Primitives usuelles

$$
\int k\,dx = kx + C
$$

$$
\int x^n dx = \frac{x^{n+1}}{n+1}+C \quad (n\neq -1)
$$

$$
\int e^x dx = e^x + C
$$

$$
\int \frac{1}{x}dx = \ln|x| + C
$$

---

## 7. Intégration

### Définition

$$
\int_a^b f(x)\,dx = F(b)-F(a)
$$

---

### Propriétés

$$
\int_a^a f(x)\,dx=0
$$

$$
\int_a^b f(x)\,dx=-\int_b^a f(x)\,dx
$$

$$
\int_a^b (f+g)=\int_a^b f+\int_a^b g
$$

$$
\int_a^b kf = k\int_a^b f
$$

---

### Intégration par parties

$$
\int_a^b u'(x)v(x)\,dx = [u(x)v(x)]_a^b - \int_a^b u(x)v'(x)\,dx
$$

---

## 8. Géométrie de l’espace

Vecteur :
$$
\vec{u}=\begin{pmatrix}x\\y\\z\end{pmatrix}
$$

Produit scalaire :
$$
\vec{u}\cdot\vec{v}=x_1x_2+y_1y_2+z_1z_2
$$

Norme :
$$
\|\vec{u}\|=\sqrt{x^2+y^2+z^2}
$$

---

## 9. Dénombrement

- Listes ordonnées avec répétition : $n^k$
- Permutations : $n!$
- Combinaisons :
$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}
$$

---

## Exercices types

*(Corrections volontairement omises — c’est trivial.)*