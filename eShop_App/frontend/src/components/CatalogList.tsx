import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Container } from '@mui/material';
import { CatalogDTO } from '../types';
import { catalogApi } from '../services/api';

const CatalogList: React.FC = () => {
    const [catalogs, setCatalogs] = useState<CatalogDTO[]>([]);

    useEffect(() => {
        const fetchCatalogs = async () => {
            try {
                const response = await catalogApi.getAllCatalogs();
                setCatalogs(response.data);
            } catch (error) {
                console.error('Error fetching catalogs:', error);
            }
        };

        fetchCatalogs();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={4}>
                {catalogs.map((catalog) => (
                    <Grid item key={catalog.id} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={catalog.imageUrl || 'https://via.placeholder.com/200'}
                                alt={catalog.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {catalog.name}
                                </Typography>
                                <Typography>
                                    {catalog.description}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                                    ${catalog.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CatalogList; 