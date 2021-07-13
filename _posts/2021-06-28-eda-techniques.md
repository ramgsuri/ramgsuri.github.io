---
layout: post
title: Toolkit For Exploratory Data Analysis
image: img/blogheader/eda_analytics.jpg
gh-repo: ramgsuri/exploratory-data-analysis
gh-badge: [star, fork, follow]
tags: [ML, EDA, DataScience, Pandas]
comments: true
---

{: .box-note}       
*If you are going to find out anything about a dataset,  
then you must understand the data first and try to gather as many
insights from it*

### What's an EDA ?
Exploratory data analysis (EDA) is used by data scientists to analyze and investigate data sets 
and summarize their main characteristics, often employing data visualization methods.
 
### Importance OF EDA
* It helps in looking up data before making any assumptions.  
* It can help ***identify obvious errors***, as well as better understand existing patterns within the data.
* It helps in ***detecting outliers or anomalous events***, find interesting relationships among the variables / features.
* Deliver ***data-driven insights*** to business stakeholders.

### Data & Its Types
The term "data" was first used to denote "transmissible and storable computer information" in 1946 
[(source)](https://www.etymonline.com/word/data).

#### Broadly  Categorized Under Three Umbrella
* Structured - ( *For Example* : Customer Information stored in RDBMS.. )
* Semi-Structured - ( *For Example* : Json & XML Document, Emails, EDI.. )
* Unstructured - ( *For Example* : Images, Audio Files, Video Files.. )

In this post **we will focus on structured data**, where I would walkthrough a 
systemic approach to quickly show latent statistics from one of the dataset.

**Structured Data Types** can further be categorized into 2 types :

1.) Categorical Data :  Any data that is not a number. The rules of arithmetic
do not apply.

{: .box-note}
***Nominal*** - It comes from the latin word "nomen" which means Name.  
It represents Simple Naming System.  
*For Example* - **Country Names**  
***Ordinal*** - Data in which their order matters.  
*For Example* 
Competitive Ranking 1,2,3..  
Happiness Rating On Scale Of 10  
***Binary*** - Data which can have only 2 values.  
*For Example* - Yes or No
{: .box-note}
    
2.) Quantitative Data : Data which can be represented in form of numbers.
The rule of arithmetic operations can be applied on them.

{: .box-note}
***Discrete*** - Numbers which have a logical end to them.    
*For Example* -  Interval, Days in a Month.  
***Continuous*** - Numbers which don't have a logical end to them.  
*For Example* - Heights.

### Processes Involved In EDA
*  **Data Collection** -    Gather data from different source   
   
   *Public Data Websites*
    * [www.data.gov.in](https://www.data.gov.in)  
    * [www.databank.worldbank.org](https://www.databank.worldbank.org)
       
   *Social Websites* 
    * [www.facebook.com](https://www.facebook.com)
    * [www.twitter.com](https://www.twitter.com)
    
   *Blogs / Websites etc via scrapping* 
    * JSoup
    * Beautiful Soup
   
* **Data Cleaning** - Cleanse the data such as missing data or measurement error.
    
   *Open Refine* - [https://openrefine.org/](https://openrefine.org/)
   
* **Data Pre-processing**  
  
  *Classic Unix Tools*
   * sed/awk
   * Shell Scripts
   * GNU Parallel
     
* **Data Visualization** - The objective of this technique is to display the important 
information in a clean, concise manner on a single screen with the purpose to inform 
and not misguide its readers.

  *Some Tools For Data Visualization & Dashboard*
   * Tableau
   * Apache Superset

### Types Of EDA  
* **Univariate Analysis**          
This is the simplest form of data analysis, 
where the data being analyzed consists of only one variable.The main purpose of this
analysis is to describe data and find patterns within it.   
Few Visualizations to perform Univariate Analysis :  

  * Box Plot
  * Histogram
  * Stem and Leaf Plot

* **BiVariate Analysis**  
This is similar to univariate and this analysis can be descriptive or 
inferential. It involves the analysis of the relationship between 
two variables.

  * Scatter Plot
  * Bivariate Line Chart

* **Multivariate Analysis**  
Multivariate data analysis refers to any statistical technique used to analyze 
data that arises from more than one variable.  
Few Visualizations to perform Multivariate Analysis :  
  * Scatter Plot
  * Bar Chart  
  * Bubble Chart
  * Run Chart

* **Correlation Analysis**  

{: .box-note}
*Let's Jump to Code Now *  

  






      



 
 




  

