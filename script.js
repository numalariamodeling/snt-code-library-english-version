function toggleMenu(menuHeader) {
    const submenu = menuHeader.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function loadContent(page) {
    const content = {
        overview: `
            <h3 class="sidebar-title">Version: 3 October 2024 </h3>
            <h3 class="sidebar-title">Authors: Mohamed Sillah Kanu, Sammy Oppong, Jaline Gerardin </h3>
            <h2>Overview</h2>
            <h3>Motivation</h3>
            <p>SNT is here to stay: many NMCPs have found it useful and are continuing to embrace it and further develop it for their analytical needs. Since 2019, multiple individuals have supported the analysis portions of SNT. In most cases, individuals have built their own code in a variety of languages (Stata, R, and Python), sometimes building on others’ previous code and sometimes re-developed independently.</p>

            <h3>Objectives</h3>
            <p>We will build a code library for SNT analysis to:</p>
            <ul>
                <li>1. Improve quality and reproducibility of SNT analysis by ensuring that analysts are using similar, correct approaches.</li>
                <li>2. Improve efficiency of SNT analysis by minimizing duplication of effort.</li>
                <li>3. Promote accessibility of SNT analysis by lowering barriers to entry.</li>
            </ul>
        `,

        shapefiles: `
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>

            <h3>A. Data Assembly and Management > A.1 Shapefiles</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p>This section explains the workflow of importing and managing shapefiles using R.</p>

            <h3>Step 1: Install Necessary Libraries</h3>
            <p>This can be done using the following code:</p>
            <pre><code class="language-r">
# Install necessary libraries
install.packages(c("sf", "ggplot2", "dplyr"))      
            </code></pre>
            <p>This code installs the <code>sf</code> package for handling spatial data, <code>ggplot2</code> for data visualization, and <code>dplyr</code> for data manipulation.</p>

            <h3>Step 2: Load Necessary Libraries</h3>
            <p>After installing the libraries, you need to load them into your R environment:</p>
            <pre><code class="language-r">
# Load necessary libraries
library(sf)
library(dplyr)
library(ggplot2)
            </code></pre>

            <h3>Step 3: Import Shapefiles</h3>
            <p>You can import shapefiles using the <code>st_read</code> function from the <code>sf</code> package:</p>
            <pre><code class="language-r">
# Import Shapefiles
import_shapefile <- function(filepath) {
    shapefile <- st_read(filepath)  # Read the shapefile
    return(shapefile)  # Return the loaded shapefile
}
            </code></pre>

            <h3>Step 4: Rename and Match Names</h3>
            <p>Sometimes, columns in your shapefile need renaming for clarity:</p>
            <pre><code class="language-r">
# Rename and Match Names
rename_shapefile_columns <- function(shapefile, new_names) {
    colnames(shapefile) <- new_names  # Rename columns
    return(shapefile)  # Return the renamed shapefile
}
            </code></pre>

            <h3>Step 5: Link Shapefiles to Relevant Scales</h3>
            <p>Link your shapefile to relevant scales or metadata by merging it with another data frame:</p>
            <pre><code class="language-r">
# Link Shapefiles to Relevant Scales
link_shapefiles_to_scales <- function(shapefile, scales_df, link_col) {
    linked_shapefile <- shapefile %>%
        left_join(scales_df, by = link_col)  # Merge shapefile with scales
    return(linked_shapefile)  # Return the linked shapefile
}
            </code></pre>

            <h3>Step 6: Visualizing Shapefiles and Making Basic Maps</h3>
            <p>You can visualize the shapefile using <code>ggplot2</code>:</p>
            <pre><code class="language-r">
# Visualizing Shapefiles and Making Basic Maps
visualize_shapefile <- function(shapefile) {
    ggplot(data = shapefile) +
        geom_sf(aes(fill = some_variable)) +  # Visualize the shapefile
        theme_minimal() +
        labs(title = "Shapefile Visualization", fill = "Variable")  # Set title and legend
}
            </code></pre>

            <h3 id="fullCode">Full code</h3>
            <pre><code class="language-r">
# Install necessary libraries
install.packages(c("sf", "ggplot2", "dplyr"))
# Load necessary libraries
library(sf)
library(dplyr)
library(ggplot2)
# Import Shapefiles
import_shapefile <- function(filepath) {
    shapefile <- st_read(filepath)
    return(shapefile)
}
# Rename and Match Names
rename_shapefile_columns <- function(shapefile, new_names) {
    colnames(shapefile) <- new_names
    return(shapefile)
}
# Link Shapefiles to Relevant Scales
link_shapefiles_to_scales <- function(shapefile, scales_df, link_col) {
    linked_shapefile <- shapefile %>%
        left_join(scales_df, by = link_col)
    return(linked_shapefile)
}
# Visualizing Shapefiles and Making Basic Maps
visualize_shapefile <- function(shapefile) {
    ggplot(data = shapefile) +
        geom_sf(aes(fill = some_variable)) +
        theme_minimal() +
        labs(title = "Shapefile Visualization", fill = "Variable")
}
            </code></pre>           
        `,

        hf: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.2 Health Facilities</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block      
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>
Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,



        dhis2: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.3 Routine Case Data from DHIS2</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,



        dhs: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.4 DHS Data</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,



        pop: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.5 Population Data</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,


        climate: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.6 Climate Data</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,



        lmis: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.7 LMIS Data</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,



        model: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>A. Data Assembly and Manangement>A.8 Modeled Data</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,


        reportingrate: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratification>B.1 Reporting Rate per Variable</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,


        groupmergedf: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratification>B.2 Group and Merge Data Frame</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,      


        crudeincidence: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratification>B.3 Crude Incidence by Year</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  



        adjustedincidence: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratification>B.4 Adjusted Incidence by Year/h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  



        optionincidence: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratefication>B.5 Option to Select Incidence</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


        riskcategorization: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>B. Epidemiological Stratification>B.6 Risk Ctegorization</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


        accesstocare: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>C. Stratification of Other Determinants>C.1 Access to Care</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


       seasonality: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>C. Stratification of Other Determinants>C.2 Seasonality</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  



       epi: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.1 EPI Coverage and Dropout Rate</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


       iptp: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.2 IPTp and ANC Coverage</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


       pmc: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.3 PMC (Perennial Malaria Chemoprevention)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  

       smc: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.4 SMC (Seasonal Malaria Chemoprevention)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       vaccine: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.5 Malaria Vaccine</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  


       itn: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.6 ITN Coverage, Ownership, Access, Usage and Type</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  



       irs: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.7 IRS (Indoor Residual Spray)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       mda: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.8 MDA (Mass Drug Administration)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       iptsc: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.9 IPTsc (Intermittent Preventive Treatment of Malaria in School-aged Children)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       pdmc: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>C. Stratification of Other Determinants>D.10 PDMC (Post-discharge Malaria Chemoprevention)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       lsm: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.11 LSM (Larval Source Management)</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  




       assessingqualman: `
           
            <div class="fixed-buttons">
                <button class="text-button" onclick="scrollToSection('stepByStep')">Step by step</button>
                <button class="text-button" onclick="scrollToSection('fullCode')">Full code</button>
            </div>
        
            <h3>D. Review of Past Interventions>D.12 Assessing the quality of case management</h3>
            <h3 id="stepByStep">Step by step approach</h3>
            <p></p>

            <h3>Step 1: </h3>
            <p></p>
            <pre><code>

Code block

            
            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 2: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>


Code block



            </code></pre>
            <p></p>

            <h3>Step 3: </h3>
            <p> </p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code></pre>
            <p></p>

            <h3>Step 4: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block

            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3>Step 5: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>



Code block



            </code></pre>
            <p></p>

            <h3>Step 6: </h3>
            <p></p>
            <pre><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --><code>




Code block



            </code><button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here --></pre>
            <p></p>

            <h3 id="fullCode">Full code</h3>
          
            <pre id="codeBlock">
                <code>











Code block
























                </code>
                <button class="copy-button" onclick="copyCode()">Copy Code</button> <!-- Copy button positioned here -->
            </pre>


           
        `,  

 





        
        
    };

    document.getElementById('content').innerHTML = content[page];
}

// Load the overview content when the page opens
window.onload = function() {
    loadContent('overview');
};

// Scroll to the relevant section when buttons are clicked
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'auto' });
    }
}       


function copyCode() {
    const codeBlock = document.getElementById("codeBlock").innerText;
    navigator.clipboard.writeText(codeBlock).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}



document.querySelector('.search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-link, .menu-header');
    
    menuItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = 'block'; // Show matching items
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
});



// Function to handle link selection
function selectLink(selectedLink) {
    // Remove 'selected' class from all links
    var links = document.getElementsByClassName('menu-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('selected');
    }
    // Add 'selected' class to the clicked link
    selectedLink.classList.add('selected');
}



function toggleMenu(menuHeader) {
    var submenu = menuHeader.nextElementSibling; // Get the submenu
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show the submenu
        menuHeader.querySelector('.menu-indicator').textContent = 'v'; // Change indicator to 'v'
    } else {
        submenu.style.display = "none"; // Hide the submenu
        menuHeader.querySelector('.menu-indicator').textContent = '>'; // Change indicator back to '>'
    }
}
