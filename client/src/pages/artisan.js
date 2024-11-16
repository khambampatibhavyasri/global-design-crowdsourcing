import React, { useState } from 'react';

const artisansData = [
    {
        "Name": "Gujarat Ajrakh Works",
        "Location": "Bhuj",
        "Skills": "Ajrakh Printing",
        "Specialized_Textiles": "Wool, Cotton",
        "Production_Prices": "Medium",
        "Completion_Time": 15
    },
    {
        "Name": "Kutch Ajrakh Artisans",
        "Location": "Kutch",
        "Skills": "Ajrakh Printing",
        "Specialized_Textiles": "Silk, Linen",
        "Production_Prices": "High",
        "Completion_Time": 18
    },
    {
        "Name": "Rajasthan Ajrakh Masters",
        "Location": "Barmer",
        "Skills": "Ajrakh Printing",
        "Specialized_Textiles": "Cotton, Wool",
        "Production_Prices": "Medium",
        "Completion_Time": 16
    },
    {
        "Name": "Ajrakh Studio",
        "Location": "Ahmedabad",
        "Skills": "Ajrakh Printing",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "Medium",
        "Completion_Time": 14
    },
    {
        "Name": "Jaipur Batik Artists",
        "Location": "Jaipur",
        "Skills": "Batik, Dyeing",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "High",
        "Completion_Time": 20
    },
    {
        "Name": "Gujarat Batik House",
        "Location": "Ahmedabad",
        "Skills": "Batik",
        "Specialized_Textiles": "Cotton, Wool",
        "Production_Prices": "Medium",
        "Completion_Time": 12
    },
    {
        "Name": "West Bengal Batik Crafts",
        "Location": "Kolkata",
        "Skills": "Batik",
        "Specialized_Textiles": "Silk, Linen",
        "Production_Prices": "Medium",
        "Completion_Time": 14
    },
    {
        "Name": "Odisha Batik Workshop",
        "Location": "Bhubaneswar",
        "Skills": "Batik",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "Low",
        "Completion_Time": 10
    },
    {
        "Name": "Rajasthan Block Printers",
        "Location": "Jaipur",
        "Skills": "Block Printing",
        "Specialized_Textiles": "Cotton, Linen",
        "Production_Prices": "Medium",
        "Completion_Time": 14
    },
    {
        "Name": "Gujarat Block Workshop",
        "Location": "Surat",
        "Skills": "Block Printing",
        "Specialized_Textiles": "Wool, Cotton",
        "Production_Prices": "Low",
        "Completion_Time": 11
    },
    {
        "Name": "Bengal Block Studio",
        "Location": "Kolkata",
        "Skills": "Block Printing",
        "Specialized_Textiles": "Silk, Cotton",
        "Production_Prices": "Medium",
        "Completion_Time": 16
    },
    {
        "Name": "Andhra Block Artisans",
        "Location": "Vijayawada",
        "Skills": "Block Printing",
        "Specialized_Textiles": "Cotton, Linen",
        "Production_Prices": "High",
        "Completion_Time": 20
    },
    {
        "Name": "Jaipur Hand Painting",
        "Location": "Jaipur",
        "Skills": "Hand Painting",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "High",
        "Completion_Time": 22
    },
    {
        "Name": "Delhi Hand Painters",
        "Location": "New Delhi",
        "Skills": "Hand Painting",
        "Specialized_Textiles": "Polyester, Cotton",
        "Production_Prices": "Medium",
        "Completion_Time": 18
    },
    {
        "Name": "Punjab Handcrafted Art",
        "Location": "Amritsar",
        "Skills": "Hand Painting",
        "Specialized_Textiles": "Silk, Linen",
        "Production_Prices": "Medium",
        "Completion_Time": 16
    },
    {
        "Name": "Bengal Hand Paint Hub",
        "Location": "Kolkata",
        "Skills": "Hand Painting",
        "Specialized_Textiles": "Wool, Cotton",
        "Production_Prices": "Low",
        "Completion_Time": 12
    },
    {
        "Name": "Punjab Embroidery Works",
        "Location": "Ludhiana",
        "Skills": "Embroidery",
        "Specialized_Textiles": "Silk, Cotton",
        "Production_Prices": "Low",
        "Completion_Time": 10
    },
    {
        "Name": "Karnataka Kasuti Art",
        "Location": "Dharwad",
        "Skills": "Embroidery",
        "Specialized_Textiles": "Silk, Wool",
        "Production_Prices": "Low",
        "Completion_Time": 8
    },
    {
        "Name": "Gujarat Embroidery Hub",
        "Location": "Surat",
        "Skills": "Embroidery",
        "Specialized_Textiles": "Cotton, Polyester",
        "Production_Prices": "Medium",
        "Completion_Time": 14
    },
    {
        "Name": "Rajasthan Thread Crafts",
        "Location": "Jaipur",
        "Skills": "Embroidery",
        "Specialized_Textiles": "Wool, Linen",
        "Production_Prices": "High",
        "Completion_Time": 18
    },
    {
        "Name": "Delhi Digital Prints",
        "Location": "New Delhi",
        "Skills": "Digital Printing",
        "Specialized_Textiles": "Polyester, Silk",
        "Production_Prices": "Medium",
        "Completion_Time": 12
    },
    {
        "Name": "Mumbai Digital Studio",
        "Location": "Mumbai",
        "Skills": "Digital Printing",
        "Specialized_Textiles": "Cotton, Linen",
        "Production_Prices": "High",
        "Completion_Time": 14
    },
    {
        "Name": "Bangalore Digital Arts",
        "Location": "Bangalore",
        "Skills": "Digital Printing",
        "Specialized_Textiles": "Silk, Polyester",
        "Production_Prices": "Medium",
        "Completion_Time": 10
    },
    {
        "Name": "Hyderabad Print Masters",
        "Location": "Hyderabad",
        "Skills": "Digital Printing",
        "Specialized_Textiles": "Cotton, Wool",
        "Production_Prices": "Low",
        "Completion_Time": 9
    },
    {
        "Name": "Odisha Ikat Weavers",
        "Location": "Sambalpur",
        "Skills": "Ikat Weaving",
        "Specialized_Textiles": "Silk, Cotton",
        "Production_Prices": "Medium",
        "Completion_Time": 18
    },
    {
        "Name": "Andhra Ikat Craft",
        "Location": "Vijayawada",
        "Skills": "Ikat Weaving",
        "Specialized_Textiles": "Cotton, Wool",
        "Production_Prices": "Medium",
        "Completion_Time": 15
    },
    {
        "Name": "Karnataka Ikat Studio",
        "Location": "Bangalore",
        "Skills": "Ikat",
        "Specialized_Textiles": "Silk, Polyester",
        "Production_Prices": "Low",
        "Completion_Time": 10
    },
    {
        "Name": "Gujarat Ikat House",
        "Location": "Ahmedabad",
        "Skills": "Ikat Weaving",
        "Specialized_Textiles": "Linen, Wool",
        "Production_Prices": "High",
        "Completion_Time": 20
    },
    {
        "Name": "Andhra Kalamkari Center",
        "Location": "Machilipatnam",
        "Skills": "Kalamkari, Dyeing",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "High",
        "Completion_Time": 25
    },
    {
        "Name": "Telangana Kalamkari Art",
        "Location": "Hyderabad",
        "Skills": "Kalamkari",
        "Specialized_Textiles": "Linen, Cotton",
        "Production_Prices": "Medium",
        "Completion_Time": 16
    },
    {
        "Name": "Tamil Nadu Kalamkari Co.",
        "Location": "Chennai",
        "Skills": "Kalamkari, Dyeing",
        "Specialized_Textiles": "Silk, Wool",
        "Production_Prices": "Low",
        "Completion_Time": 12
    },
    {
        "Name": "Maharashtra Kalamkari Hub",
        "Location": "Mumbai",
        "Skills": "Kalamkari",
        "Specialized_Textiles": "Cotton, Silk",
        "Production_Prices": "Medium",
        "Completion_Time": 15
    }
];

const ArtisensaPage = () => {
    const [filteredArtisans, setFilteredArtisans] = useState(artisansData);
    const [filters, setFilters] = useState({
        location: '',
        skills: '',
        textiles: '',
        price: '',
        maxCompletionTime: ''
    });

    const uniqueLocations = [...new Set(artisansData.map(artisan => artisan.Location))];
    const uniqueSkills = [...new Set(artisansData.map(artisan => artisan.Skills))];
    const uniqueTextiles = [...new Set(artisansData.flatMap(artisan => artisan.Specialized_Textiles.split(', ')))];
    const uniquePrices = [...new Set(artisansData.map(artisan => artisan.Production_Prices))];

    const applyFilters = (currentFilters) => {
        let filtered = artisansData.filter(artisan => {
            return (
                (currentFilters.location ? artisan.Location === currentFilters.location : true) &&
                (currentFilters.skills ? artisan.Skills.includes(currentFilters.skills) : true) &&
                (currentFilters.textiles ? artisan.Specialized_Textiles.includes(currentFilters.textiles) : true) &&
                (currentFilters.price ? artisan.Production_Prices === currentFilters.price : true) &&
                (currentFilters.maxCompletionTime ? artisan.Completion_Time <= parseInt(currentFilters.maxCompletionTime) : true)
            );
        });
        setFilteredArtisans(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const newFilters = {
            ...filters,
            [name]: value
        };
        setFilters(newFilters);
        applyFilters(newFilters);
    };

    // Internal CSS styles
    const styles = {
        page: {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            padding: '20px',
            backgroundColor: '#fafafa'
        },
        title: {
            textAlign: 'center',
            marginBottom: '30px',
            color: '#333'
        },
        filters: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '30px'
        },
        select: {
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        },
        cardsContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px'
        },
        card: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        },
        cardTitle: {
            marginTop: '0',
            color: '#007BFF'
        },
        cardText: {
            margin: '10px 0',
            color: '#555'
        },
        cardStrong: {
            color: '#333'
        }
    };

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Artisans</h1>
            <div style={styles.filters}>
                <select
                    name="location"
                    onChange={handleFilterChange}
                    value={filters.location}
                    style={styles.select}
                >
                    <option value="">All Locations</option>
                    {uniqueLocations.map(location => (
                        <option key={location} value={location}>{location}</option>
                    ))}
                </select>
                <select
                    name="skills"
                    onChange={handleFilterChange}
                    value={filters.skills}
                    style={styles.select}
                >
                    <option value="">All Skills</option>
                    {uniqueSkills.map(skill => (
                        <option key={skill} value={skill}>{skill}</option>
                    ))}
                </select>
                <select
                    name="textiles"
                    onChange={handleFilterChange}
                    value={filters.textiles}
                    style={styles.select}
                >
                    <option value="">All Textiles</option>
                    {uniqueTextiles.map(textile => (
                        <option key={textile} value={textile}>{textile}</option>
                    ))}
                </select>
                <select
                    name="price"
                    onChange={handleFilterChange}
                    value={filters.price}
                    style={styles.select}
                >
                    <option value="">All Prices</option>
                    {uniquePrices.map(price => (
                        <option key={price} value={price}>{price}</option>
                    ))}
                </select>
                <input
                    type="number"
                    name="maxCompletionTime"
                    placeholder="Max Completion Time (days)"
                    onChange={handleFilterChange}
                    value={filters.maxCompletionTime}
                    style={styles.input}
                />
                <button
                    style={styles.button}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                >
                    Filters
                </button>
            </div>
            <div style={styles.cardsContainer}>
                {filteredArtisans.map(artisan => (
                    <div style={styles.card} key={artisan.Name}>
                        <h2 style={styles.cardTitle}>{artisan.Name}</h2>
                        <p style={styles.cardText}>
                            <strong style={styles.cardStrong}>Location:</strong> {artisan.Location}
                        </p>
                        <p style={styles.cardText}>
                            <strong style={styles.cardStrong}>Skills:</strong> {artisan.Skills}
                        </p>
                        <p style={styles.cardText}>
                            <strong style={styles.cardStrong}>Specialized Textiles:</strong> {artisan.Specialized_Textiles}
                        </p>
                        <p style={styles.cardText}>
                            <strong style={styles.cardStrong}>Production Prices:</strong> {artisan.Production_Prices}
                        </p>
                        <p style={styles.cardText}>
                            <strong style={styles.cardStrong}>Completion Time:</strong> {artisan.Completion_Time} days
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtisensaPage;